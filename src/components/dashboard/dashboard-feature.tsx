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
    "4qFZzzAykps1go6aQ5mMrNFnZmQybNk6pcxApZKAcxhRZLp51fn8p7YmVr5UcryHT5r6bEF5Nk3XuNCUyKE13tVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UUuyqCe9Mp7idqy2LaCL6ixZgxCysNsczzakdNdWyMt987Qzpu8bUTte9N2nFribuTerZB59NWMoviwAK2UKPpK",
  "key1": "2icfHiYUF2HWx7zVP4qkN3cSd6ZupCaG8octSf8DjvfVtoLLUeDbu8ew5gxx5XvG2DRqfXJZbHGv6p1pNdTG92Tf",
  "key2": "3maqh37CbwejAnfV57rQxn4harqcAP3TPM5cj726XNbCASNgquJQHD6wUAVLG4i4JfprynRMbUXHyzb3ZUCv945C",
  "key3": "3HrPcsCahEXjm1Jw59kehnsrhdMFpptptnPTB6uJZL9gH2tJtWsZ4Lr7V4dwMfmZdoiFHdKYzTqVkSULgbBGE8Xm",
  "key4": "2HkUpZyEZAnrDxUpieSZjiM1Zvn8H3z8gtvUzKFHGE8tgM2V3MpbfvFYs16TcfxqGjfXZfkhugUfFBeKe2hL4FuL",
  "key5": "3JngDDT9yvLAJELU3ZhWU7WmdyLuUwmTyduhPRSRcN3m39Wdq3Pr6nsa2yGoGvAraosn4v5aWiEcWAE4JkkVx73D",
  "key6": "2W2JNyyhhXftBzdJWCfRTTYHwTQzgRRhrfeAw9JJx344umamLVrqwscKPefciKVCgLBbs4dXkPhgZtZriMxGcpu9",
  "key7": "2PfYjisRCSgH11zYJrzMZHzrqzv2Gm3beYRv1ezQyf1fnUZPHmvPSUpkZDLmEpUV72TcUHSXq8hYBvjDGnzfxEQo",
  "key8": "4gDNumqs3zeXzCbVbL6HEeV9Ab8HepzTABrEmDTbRQ29N942Aona2JYgLTtD8m2Qu1nGHx5LtZ4DsVb4D84mGt7N",
  "key9": "4HGNotuvszp24zJQD6PBYPMmzSGGJ6QUixNvbDKwP8tNy3hTZdgfZ5mWXpRjoBDQEhSoNV27jB34dNwPRpGmdELq",
  "key10": "4gPnMN87DrQZFaNqSqobLUJccQRRwbWQrqpz5njjkrSc8FgJbbThEYA334a4uYRCWWT9jk4ojn6cKD3geA1N1ksB",
  "key11": "3yhdhFEbXvvtdY6ztAiSdxjExdi8hmaKqB4dmMAkGMcZVdMNH9co9XZiZ1NPmFJKBkJzBiBKKPheuLtHQfCVRGBN",
  "key12": "3in6Q41ste17yDGAjrktEvoT2DLs38i5ZCdAaEiRgisuxd9TjxwjMHZjBzPwM9eGegxTaHqDmy3vsz6GcwuYcnKD",
  "key13": "5Ln4extYcgW1VEJYLkMY1BPD6usYYN7aTSKEcfcr6My8DVhBjLQ73snQ1f6mK5AzFtHN7ZdJ5CqnvFSEbCa9bnBR",
  "key14": "55qprafreU2f7fhZWbRJiFZDBznc1GB7WhY8MCdVJwrm9UJytf1V9btCpANPhwR7iMRToe4qqMEZHCJN7AGhe6vp",
  "key15": "4WxwAjSsuS4frd4jWTpa2Xd9AamtMhkYeuuVBzQQjWQHvMRCGDVQLuCaqxScBLvjACY6u9tytTcPFgr3D211tyts",
  "key16": "5DTPt8UneN9Sfh6gBemkgHu3NGvmsUghCaJGScQ8k6pa6KNtbWRTpxhHyYTVAJJxNBZ9dBtjhcAiRNXmvUXjrT41",
  "key17": "QdWzeY4GKc6AGLJXNc5EnayrRia8Jbs4G8jhpP9ip16PdtR9znW8j6GpoxDX5rw6rBUB19CLAHdiv1awPkfvAcC",
  "key18": "4eCvfBWhLvPmc981G467P9agmuq8A3zEpcBK5qUfNcPKBdC1QuAHvM5C5MLRM6ErzZ7uAH42aJQWgMhkufjfx5vx",
  "key19": "4NTDfChXJ8sVSgC42J7LdxCrCGTUDt9rbyA9u73Y3a7YWWF6EbYJZm29L7G84fs3sMLKRiBfwiUaJDsWcPFNVuD6",
  "key20": "3xWH6qZ17BS8jt6XSUUXpdCtTXPQMCQanUfvFVMJkp8xWs21nQa2FWN2QEpmSEvLbdoVx9mMEzg7UnECp2bULtcn",
  "key21": "28HNBYBVzeVyVThx9yxgtUTwRU3MoxpLusofwEK4ZQWgLknb5dqr588Levuzq1LnDeuJnT83M5zTS5Cas9bq8ao7",
  "key22": "bNcHs4T1oNBbZPAm57xmWdYabCaLPdZH93V1zfKWwmhFt9VRPPpsB2Ume4X7kSZKdw5ujdUw9LWQoEnoymWSG7C",
  "key23": "4TzfMK91Xs34GhMbM6Kqm8TV1U9v3sfphE6RshSyYDnsfB3f5EscWRftEyx7kvDKxziCZbvieGzA6eng9Yn4KDJp",
  "key24": "3iHX4c84sr2CfAf6Z7bcFvGiYsxkLYXLkMDZ8j26AhYtta2Ff631bbnK4GNAkmiCPg4zQGizMTsL5JFn1DdV6iQZ",
  "key25": "3uGCN1JDPTBdeuT1NYV1LCCaZWF3Kb3wDxr7cq1ZjgeDrRitRk23u9CBa2LbU7Ks5mhS64YcMPgGLSmaosevq7nZ",
  "key26": "JhQ3Gvf4gMCXH2aRq1Pw9K7ryRhDxFs1D2Bus9mHLbXPdiECGwPDBooQiUhjTcy5QPGBJZXGm81kX5HNNd5eSww",
  "key27": "2DVeFurBfDTy9wvrhADowCUHYPSPowb5BH4UZgxk41LfwpwDdz41oVWQpU1byVquLauNX8tA2d8m3fLsi32Vq19n",
  "key28": "2N3k9LSFtNE4JdE5TMmknVHdyun5sh2XN2u3H8YUoXucfCptWxNQfECHcFUB2rHnauA4jjtYfgEmMyvMZKBZ2W4i",
  "key29": "5dEpvVqNTRRd8gLsmZtjDpGcjTiouyuaKUmv1u6NS7VnkqcuX6YcAvUuReVu9rkEcDrTm6GQj1W72hS1SsxiAD1d",
  "key30": "3UEZkwnVtKVX3EqUbuTUJ5kwc3jJMSdeSQmqPK7SaAmYRPre5ijiwgFQU8M4bYicjo9zM8Y6AmuaQ68VmZnrAFDc",
  "key31": "erTs3N5e6LCzVprz2LA1biYo5GnfU5n4DwbmthUx3tN29nnc5ykLnY7U4EJUfLLDtGdfPSzVdRWwSzrge5EGjfS",
  "key32": "YMZkgmdrxRHVd1PHh15Z6z17N7Kope6J31kHAyYw1NbeKuB6dTidfGk9Mx2Emrb3Nd9EcEinFHHwz4He8nnTP8t",
  "key33": "2CZnVmgr9EhuTiGjjLfMJpizpn6GeF73Vg5xY9PC2PnEe9W13wN2j87zYSycXiBevy68bNnmJTxQGF8CV37H4TCg",
  "key34": "4fHVRwuRShFsbuznnQ1ACteuTNhosxzoNGFJjm5wfcynxyzyKyD5w9UqQkhxjvBwGjNUoEoqHQ93RP3AL4WwW6di",
  "key35": "5SEd3WJAw6m2W8y9q3byBfjFaWachHveR5mNcRozo4gRaHKFYqwRTMRqqRPVsCWZxUWRbMcpEtSNvHCEnmvYgkXY",
  "key36": "2JhTP4sbk8ZGcR5SWzr9nVRmD5b2DWHHN3fjUoBSbzwrELvBeYEirrDuy4t3rLm472QAEuMCTjfTbAWQVxjd7AW8",
  "key37": "dqBFiBaeV7kLo3SoY8vWYGFk5Es6otQeWuX39E4DBzZSy8LTdxyTswaQ7gYY84FSXKZBVTPC1uZg9AjWMjnYcsE",
  "key38": "aw6Ux19VAFtBLGQLRK2f1ym3pwFbSdyUssmVqyWAhkJTkLRi4eK3F8sGoQuev7pK1fvfSBtAjY9KjW4eYsunqjQ",
  "key39": "rgiYySvQZE8k9nG8px5feDo8mTRuCwCFepvsZyqKksYkKoiAkVnxHUiSnrmVr29REQbmysSkKqjygSR7XYXFmdV",
  "key40": "dcoRcH6npFViGEo5Xg47ChJzVzKY2hVp2LC7duPwtm614Sr9KKtW1EXrt7Qnww4xs4vD1F3yzgknsPdW6tHJ2Qz",
  "key41": "2LLvWiuz1m1VrsTy22fj4VJ7ek57HXYDp3oLwzr1BSoXBUS6PTKVYXqt3iVRsDrAwbHUmC6fjSXCyibzgoD2Qrju",
  "key42": "3WvyymYjkB4z3Xi7APxc7VJ6ZukLD31ryoeJjv71cU1VMA1XDdo2w5YUhCQUxvgTRp3qwgjsKxQNzcJPAdEKb5t6",
  "key43": "5UQndDYvEXSr6gj1znKZ4Uda71o3MSK5iXuv8TxzAXirU9ea8B3CZGYx18Y4b2ykvUeNa34sVuEGwv6TnEQXmg5g"
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
