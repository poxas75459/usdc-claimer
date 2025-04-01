/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3KZDtoae4731n21rWf5z8rWnZsYgq9BSV6csQhVAL6WWZg8y6jaerAc1fQT3Yw6PrAxkVwRmVQNb1DUkjGAPimW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eTjaoxSbLkTy3TVDBbugN4vGYFXhpRfWuXkuPL2sApai2o7nmkaXLqcnQRBbYyVTZHoxGRZc1XiW1pMziyFvqyT",
  "key1": "4gPiEkN5k9AetqDQpk8hcD9cQbHNSzEBC9aqSNHuvAKuKJ3HS5yK4HBPQouSYcsDHLK64VNGgZmdD5oMDJrUzQGZ",
  "key2": "24r92fVrkjw9eXHKo6Etk45DvFnKYH8tFCPuz1Ju9o3zxagj2ooCv4ts3YuT66yobpBVG7LQMWifC7wMxMB5Vz5s",
  "key3": "JwKit11bByoPoKzSPk6ymy9MQ2KQ9pPgBYFW7bmfVkxpuAxa3DnCD4ngLNMMPH9rT4o5JhBmafLyaijtvv2mSrp",
  "key4": "3eZ1wKNwNB5jMqgypv86xur7DdXKMC1QMrmKhrsXFa7bDxALQBe6bdkhUztTh4YipHX65uUoC1zAmKW34nDtPyMN",
  "key5": "3Z8vXL4cm7WkaKJDtdY92SXUvS2rb69J3v1GX1a98WzWLzowznXCXFAnnCytjrM51U5rvePk4K5yRnWeQ429hUjr",
  "key6": "5uWaqYCgr9acX1mhFsG3Ht56tsU2to1GsPyYfTdiDZmbYJBX2qnSBJSv4qCJDf4xPNSnkN2BAWjmPMAoKfgQu4gU",
  "key7": "45BAaTm2QoG188gYga55sj9tFWqzPeDiypmKnxccQyxu5TXLDTDDcoPiZ94j95aqKm4KxcyTj4VQDXWEXAL9VnMF",
  "key8": "4WiHfoU31RPa29Z4ydc9f5af2oieMTtRmMJ9hchpdRius7A7nRaD3vdoycQ3gB1urEFsLgJQ3dxyfHiCFForUkun",
  "key9": "24mbnBQj9WJLKQdKkxH4asdJjoeqCz1UsCugmgfPAUML3iA6sAUFHAi3rq29iueheczfeCzBi8kkPHzstRHQMzHD",
  "key10": "3KMpB5eCPMhbnpQzLPnH7MAqzUMtwisiNe9vr9ab1kyhqMXiC9AFh51khe4GvuJHLuWKF6dXGa2XvJn1ZWKSR7i1",
  "key11": "Hig6Hv3HcW6A2SKEhPbmbgSpb2tFCmy6X4a54R6L9S4BAxUBFXA2bnK8jY5qrQaawToicXD7auRXC4xcNsRn62s",
  "key12": "4v7Na3z92rmqZn4hfF7nnWvWBHEScrfaAZre9cYSMxEq8iQVgKgmRHgGWVJRmxY7FC6jw6hJNd6ZemzSf6tub2vr",
  "key13": "5NGhbPj5npXmp7z9bwHvKnxqvek5XComB79wcEyBaTz3VNKcNGVjDdCCsDNMy3VJB5s2TDPmNuFCVGYXcTJjdyku",
  "key14": "5UaorwgRQWccgnUC8XDBsQufGaia7fCJeMCC6GpofcRfHF9bq2UJiD1CuoZXmWaPqduyFspL5spATLXyrE23s2T3",
  "key15": "2SjGRBwsgjsKPso3Z91BiyRy18TyPmyQfTkyP6wXVXkHvCjeZtX5DxRxkEbEYdBZW2hGoqsEQnuzWwH31r7pTPSN",
  "key16": "3DxmS8ZsYnfdtjZDqsGCAF7NB81d8NaWd2VB5j586ERS6BzTGiRj6H3TjzFSCsy6hcypPrZs5sonjnWr5Ei7xbvb",
  "key17": "4hyhCFnsRrhhnNyf4WhjxkosrzeVA3Y1NnhsvTWcCg213ybfdFrCJLBEXnw68p5bZRdkM139g5SfmhFSsNE1xdCe",
  "key18": "2E3yYkbAeU1w1oQKy9TuEpHRqBMtah6K9YwDBNbEnGoUzwF3UPxoSqqRKXLuFmHbxAD1vt4jnXPzo2F7xZg73pFD",
  "key19": "34WUJD6b1RbuBCTtgRFnPjDQcy9QiDqLFLEZpP1JtVMpwbQLwwxYpVZ8LDmFjDkuRa972UBXLck7p3hoCTJ7VXvx",
  "key20": "3AvxPiBuaL17Cmcrs8doU32gy229zv9dL13bi1DBpyNBqTxyk2pz6h8uNyDSGPousN2d9swwGMgXrB95MaX9MWVE",
  "key21": "2jqQKVCzfsnJsL9oVmwr7e4d7pnbrnpreqCqhpmZ5RqPnt1Vru6N6ok7y4fgpUYDqYjRQCFPvFBTiqwakPs6h9cz",
  "key22": "3orJYdP3uambgiDr3k13FAyaVuKeB6r1ZHiUaLFeYMqoQwMwA77ULbMANn5SeUqtGXVDUS29pNC94Zj7JshnYfC1",
  "key23": "3TGVT4Vq6TdgmrMShdsouTBUY2jiryJhEgty35AGY2X4h3bXfSabku4iSrmdrrStfkPWaz8a46jKJm2o8uuymqo2",
  "key24": "52JM5ScW3Gosu4Pi8jgu2A4z5zLrxyewqoh7GKFxG2BzW4Et4XxncuR6qpQRH6Q16Ug5eWuJqAdkvV8KW9t4hphx",
  "key25": "66Bpv9Vs9UW2LZXdm8stWoieXnb7ij68d13Yr8ccRUYMYtSpApDHXZaKFhPjPm8M7hH7MFwZcpJvLQ1zjGYWS6E2",
  "key26": "4QcsZYon215VFTVLPX3UAfZAzpQhdATxripHTE1FnbBToaTQCyoRQVaFWExRTC83tqL9owGJYHRmhk6BjNh7UsRd",
  "key27": "4JSLLeccidLxGzhjoP7cqAkxjXiSgr2L2sCvCR1yL6MkCtV5aDwFgo3okdLkdsfx7cKUeQCq8N3f21xxcni78Z8c",
  "key28": "5CcVZu2g8sR3PinyysNXSfbN1n2FsTt6AnWYAaTN3bzdNq4KT76yCbUDUpHc5v1bK2zpqmCHjuoKxufEWqphcXj5",
  "key29": "2TRa1xP25U2fyYXukGsXgvQt3kShSSHt4zbtNo7dXs7irdVVSzTR2KWixC3CzJ7FJeajVNHo1dzLbn5rFzdXPoRS",
  "key30": "hmYhDi6r59EW4VUqinLuhrqJyZSFvCR4kMDas8CppCT2mf98dSGMCEFA289FNd3Eeme4egTbBHVL4jsUZopkcYH",
  "key31": "5hcgFVzXPikihKDhvuzm6oTf5DfifDsWM6Xm4zYUdRyij7f65pQABRTpo1Kp9Ey12AYGGv6zF3eDxvtTeWJPzG2D",
  "key32": "2ciTqNuidPeBYZMa6ZcBcbcjd63KEnuKb76JYwQE7bzSnD8gdgrcxAspAVfUszB9go7hRCXVre39Fwvs4x4Ldzue",
  "key33": "5TF7eCTWgNiEU2W4vLheW7hYS7pPP3nmj4SSC9pw1oMSuLq1xtdWKiGiARTPd9DBjfNErFX89drhMyTa4EHqPuTA",
  "key34": "3Ek3b2iu95iJGocbbRuLL4S4PCh1CCVqfATq2rgfqENj2J1U5vwVVzNuhb9AyxZbNP8NGJEPWMMhTwERymnHkdU7",
  "key35": "5tqMUjqXrq7neK1Tfjq62qVXxxG7KbViMZBSCH4byvXTbqmazC3yS6WSPDRjRfWif1oaVZ6tz2MtbVyGv3myoRNH",
  "key36": "3utBxmDJ7kaGJ9pFZEWA6thNsE4aG8fAu3EC2uYZQUusuciwfABGqoPrcteY9ggceRKoZtyPV4MmFmm3VJiwXXM8",
  "key37": "4c7XF2QAG7bwonL79CPDd3eiAsuGWkZtie7mXi491KFjbZXkdTenaDV8aGXBBUyNhGBZnNHvtQgS1fNoqKX8Edgt",
  "key38": "2jtpRMKdNaxw9LbCj8gSyVN3bZfGxx85uBE7KRiAm6sWkHi2BvktmvndmQgxT39YeodQUP5WEmEyVsKiCxG29xjj",
  "key39": "5b83uSDSgHRKAnjx8C7pdMd3kw11kbW4JSCZ6L2g5NETkEzXKBX8YsxMhY8yFYBCLX16M1c1SxesKeQgwGq8CrHF",
  "key40": "2caRWJQQsHfiGCFtwsy8FCT2gswdb8s6Ueo4oXPse1ubKNJLbnKFKLYbB41YirXYiySgKW19vMjq1HNRuWZ2Vqai",
  "key41": "4PeWfuDCdW34cqLq25zzD6Zdb8WMf5ACnckatEC7eMeKZpBiRUSTatLSMTR1Na8de8SsotJemtPQ9gTct1wub54L",
  "key42": "4yYPcHSjSdPKD3Xspjjnr9qwYwkqQBEDmXqFCQhvniqQTmjw3XFhfXNvXuskoPkaSoE6eirtyk3PLRQrwMgKAMdp",
  "key43": "2zAG8Bodo1ZGVQsTQbXAP8kUHEj4NdhKZF6jt2KMVFouiQww6dKXeKSJVJyYmP2XuVgNcjbFtFmPprr23hP7FqJ8",
  "key44": "31JH7R3Cgg1rQsPVaPfHhLsB438qLdfQPPiL39BjoCEu8bcnYxwSxEyugyUCR83vweKc3mi8SMxV7qkeutu4TigJ",
  "key45": "3SXVBURiibaAPjX8ao4BvFMT7pbNsKGJLjGDeXq9mfmb18s19T96ku3Lb5FVmGxjUnZZBpWVaEaHVmTVm6AMqvXp"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
