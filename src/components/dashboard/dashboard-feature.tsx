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
    "4U4wBWCrKW82cz61XgH6FmEXazTngAjWGM3cCKnmpKK38gfEP8RnxkF68v4m3Jx8CE6mNuh1rAtzDCwpN4i7t37s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47pLMp1aeX2cGXbYuTMkofqUqDwuxKpX6AQXStiffzDTkVHJLoZJFVx4yC4d2cFKf9UdWSkN7ZT2F71HZTMtZzTF",
  "key1": "3C3XxvnKS7stc8WbP9ZPaf1iph28TLwNCjFmAshn9zmYaLmUKXSU9LY7JaMsvnDxzNTX9b5W7Wp7cERrrPuZS4Pg",
  "key2": "5qXADckfuQKqCAjJtgsgmU6YaAP2S4nkpp2epdFwdG6iQiAAaN9Sjp22mZz5xAc48EzNDiuD5Em2brUxtcSrCxoK",
  "key3": "232EN7dwPBmj3jUQkj5M2fQanw6wAPR928wVmCEBXdiBFgmTpjeMDcVJJBt3y3qC3cvJ7VHiJdVXvfTUhmmDnX1H",
  "key4": "3LF1mPMMzCzu32DHkq4emk85Xyg3PaDYqRyT8zJUfWJZakLB1d3HNF4bhsgZVGBMSR9PbT2TsKcgGPpxMAKc2jLF",
  "key5": "3MpHsVkRGL4CvnPBQNQDPuCepjV6KGKRx3eNv3s9ZaKgCouRn572qUCEd36sEY9G6nVgQjguLYjfDBDuRcyQCtLE",
  "key6": "556Fkm69QwEY4Lo5GG8jeTWqmkzR4sbzMmAwT2qiU22kqN88kHzn2FLYyRgkwTfAGysEkCwTf4EyhxXf7eNnkPLq",
  "key7": "5T9ZHqctFe6xH849PULhFcRVpqaT8eMHAvj8YqdUs845amyB2489VDnUnq6YoxYs1oMX2zWUs8aRVfw3qKkfEe5Q",
  "key8": "3vfvNtbSHgWgbrxr3CkeMdVQVcmhzyGyxCiiSaexRe7RhVswmgyw9bMJMY7pVbAcmAgBzBBoWLijcLHHag8DQNJx",
  "key9": "2PStPrtneeTtg8bVmNFbBYRguzxo9i75EcoyBbch6dT9NsLWqKVuiJ9zewc14EigaWSwfYbskptKbXE67EwkEj33",
  "key10": "5MSqk5FaWxFMRU5eXP8fra2Zn42DX5xrhj84TF13cKfHYnBqTmuEaM6WKCWuXVmBQ9ZRU2bTQwbWyKJyuoQUWRFK",
  "key11": "2WqaQP5dzA5aJGMkLeMSUPvakh6r4XLPQJeSw9hsBrJVGa5hacRSVq6zCwN5Q8RMNMofAczTBJ6Wq4XzTfb1NFWW",
  "key12": "3b9bjCXyVm3fWtD1imXR2BZNivy3bAXuocayN7TdkmzFuNc2EfTr8Cxa7AxxWPvg4myB5BRtc76BrWKYMWQMbuBN",
  "key13": "2yR62JLezaGW4rXA2QFVgRCBotLCtvYaP38HEBDyofSu1yLMWaQ2T8CbSKEF5fn6BfVqjAHuzWdHrXPC5KyUeagf",
  "key14": "57CzhnkDu8FVjwzpt8KGoMKQEbgpfASmU46MGNCFAS1GdD1xXEhKF9dE4okiDLsiBATuqbSAxfQqV2muhB4YNf3Y",
  "key15": "3uqdZHP9vVcBTzEGaqi8cEnXdQUPdCkGw91yhiLXghYg322BCLvpQ7jYY5RvuVc5bR3oSEB5N6mKdEeQyRH5pZaT",
  "key16": "5pXuUphybi87UByaPfrYCmUZoq1TnZUZxnnKtnU34hGbdeGaBWbWVvkHuf2WkdRDTQaqC6H9t3u46UzafXUDrngZ",
  "key17": "5LLZ2jFYZX3FPsSa6k9pTscK5omZV65Fhh8MQBVv9a8aw3HdPWgyj3w7wSZfUHWLowNn4jMsPbcW3h1Xfe8WdR5J",
  "key18": "218zuxCzruBBivobN5BKaWFrqkGXPEki9mqJwU2VxuqAj6yMKKpHZRcpfAV4Ld7URqUS75eptv3hNM7mnMWn1BLp",
  "key19": "2FMqYuQHFsrKzFE5HQM9Tw8S7gRkReLPmQjgHGVfhaQXsgBfTk2whosMZZFiQ3EWRDbBvJ6PNtMNx8KLPJp4p3zG",
  "key20": "3Uz5SaerZFiBYnmHjznWWqgPaAy4Edog7H3xV9xXssq8s9T36SDMaYufz5PnVts4scadnAfLsSZARrfvmuxPcRnM",
  "key21": "5Ko8SuXQWdpNdsXL9Y3gUnPf4FPNtTrDG3fn2pJwGkWu5Hotm9kXiu5h4WSwSGtajx9EoXnwa8pJzGSjgy4iDmV7",
  "key22": "5UVSnettJQztCL1pH1r9XMdLg4be3agVayWQ6iZhZ45jauwvxt525sZdtxSj6mi3yiiN3oNv6zqG73jyBtr2RLbr",
  "key23": "2J5T6Wy3tHZy45Tp1kEFN8UcwLiM3zRHokwYUqeJxcyW64XypuHguGZjpyBGr8cPFiJewKncwBpbrbePsZuZUWY",
  "key24": "N218X5iJK9E8e5rrBxK1T49ceXurQG3gw8L1XV5htRWwuZQ7FbnmXc2AoBveFVoG1PUo9DPhpSoZUBadbjTkEhC",
  "key25": "2xc4EPYoziLotaH3QevktjNNUe8NRS6sCrEWQkguAwczYTVthwoVQ51DAHdovpeX1JTGhbMRATnMhb8YHNQKiwiS",
  "key26": "36TZnXHv4mwQugtdp6CpeTmSEhq9X19FGaATgLzF11Er74a5bLKFZ8ovpZpaNiDPHZwWU2d37xxYzE3PawmBytsR",
  "key27": "55MnBhPf33wJ5Paqsb66sCRYws7fE2iY7dpXjb5qbjZ8bJPeKxbuLjpRnuLdo5F9pTHEumYt7zKXGhXorXaYYB2C",
  "key28": "t92sTuhjEAZqT1VFMoVv39Arz593XLaLUZnJLkvoSyBMgqAXeojZhr3qUcgHpDEuyGwN6pKbBNpNw7hgWYmY7oJ",
  "key29": "2za5RrM9GtjAoG6nRMvnaG2MZ782vr4yYLEUWwHhRnVbLDtACammaWQ6iZsJvoYSwPtG2F7e9CTC37yXUobfr4gC",
  "key30": "LVA87cG288CoBSanEqA3muuGjqvf4q26h4k9dpv6MSE5TH2qS81qFtmghtKmr9HTSBZdb3iq6znBqVC5ntEDviz",
  "key31": "3YrDxVM4Zg6sNdKrFeYqC75888GCtB5Sbx7bsQSyN4eQ3JZHJ55Bmb6RH8eJb5s6Zch8tbdknAYDEKTBW5kmeZGZ",
  "key32": "5XvfXp1Ed7nbi64M7Ht7PW4VmrSgT77ePZepQrv3AUzYmQWSMbZZzxGdTFS4WKhX59qVLnZ22BdLe2XNymEfKBAC",
  "key33": "2vPtsmqZJS43DhWZ5VRoMNAHCXnHHm76XpzZFVub8iGtZuhSoU1poX4Fb23bR6hoCcMMFVxh5uPPz2SbSPSMSWAi"
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
