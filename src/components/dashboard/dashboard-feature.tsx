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
    "3jRfVmX17z8VSsFdBXQ7ptJWks4ZVVgqw1NJTa6n8KJtydFWMmvCurKcHkKG9PTRSihvBzHim8ixQLxkZhBAuzi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MiTas4rHjnoz7jWiGtMERsvLD7ZJxau3pDw9dAmj9Ztd7tTjo9rDW2GpeZVCf8FMXN5ZsQVK3nbFkpKE1pzbusw",
  "key1": "5VWpKt33qxpHfWJN8JvQpo8BkoScu6cDpnrzF7JXs6kFLCLGb1Y6AosCvBVXvQAyDETuZD68vBN7dsARtRXxaAu8",
  "key2": "4vtHAC3hekvQRfc45NJMVptwbnSkXpxkaGn39rn6kQFRyBSRCpm9Z3QaVyUdbZYofypjSrvB5nKgJWo3XaKPJw3i",
  "key3": "StQDLHS1b1RnVucSQvq4UXi3YvohuEJPZyMjAFmZGtXkCDMDPs4BygUJoK6hbaANGJL3gZSaUaUUDQzCNrDNSnd",
  "key4": "53SPipBr6Wocp512oZP1zmdiv6rAmx4QgJ4Nny3qafkj71JftgBRT4RFAisaQFmVcaaPU7DYksU7BvPESFjmySKY",
  "key5": "3Y2NDi43HXiXkcsxvJgxS1LRKvDe6f2fjBswTAsoGHiyoQ4yf15zmmWe1vFhG9nzZrhhkiyhYDSRZ9zZ1FC8rDhF",
  "key6": "2KGVCK4Rv24vE3KYkf9BdHayxvcxpwCCDuYrcNR8Fg4zbahpPXD3HqwzQmFzKMkXSGydFbCwaLzydkUV1rmCrp1S",
  "key7": "ZXoWuijzptoBm5Ard9eXEcxjqqgY8BHECJ9ENbotbhTeYMt97EKyyRvctGy1AgKJskJBb1DnKALJiXSpY12mdJn",
  "key8": "5Er8mKbDGUorZpc8889jx1szDgDvFVJLzjk2KjGdxSuJ2RPfFU4JFPjbPDdrGajLVD32H2ZXMtAnVecjveqAbHhb",
  "key9": "NGdpCvvSvYmsFpx7V11vMfsdktWMjEFbBueuagJ2e6HvTbFnndshfn8Cyhhi6DjEFCFbXeeuZ3h5zjS7DDQHDxX",
  "key10": "62rfvm8gJ3UZaJkWn4wodgap77mHWqmZWBc1hDffbDwHutKak4UijhSM1XZ2evmRw3rnMcmLP1qg1EdM2xqSa1Fu",
  "key11": "41Wv66st5E3dUSk6uxBzidqh2LzyTkCA6orTxuRMCqRwWsqm4S4jLoFiJVKCogEHXEZKVNVJvKzcPqrfbnwVn9Ua",
  "key12": "4Mmn1D5Vb1zbkMMB7LjHh8YAQgBcFVgTUD4XQGvD9FRuXbaSXsucDrWw2cEgrCzpXVmpjFmHMcPcrjKJ9UNpfqBW",
  "key13": "51eVJX6unZ87CpT2GCMYnbp9gdXFG2RAjWc3hjkCxEMnM6apBtCRxSu7LkatxTqTbtcrdepYSeUSnGcTNCwCGuBz",
  "key14": "5WpjUwxoDwU4oUcE8hzvSzqTDN481XKFojDq3B1UqDhAzFmyvEvPwuBxj78WPLndahQ6uLqnU1xzxUgGYUBZSVTa",
  "key15": "56zu6Hg56kNWjVPMpoBQaPYxDTzhdmX7UHzPAQY6qvsojoNdXCBJgFHn4Pgj6mL5x3GMwmaKWU9KZM5sQeKgd72q",
  "key16": "5tdKh2jNYVFrsVVyyGqS2zmJ8QKLuCMShhahMzaUCejVVayNEtv3C8W6vQhEumatriECCm3pJb56nPog1u6gAGEQ",
  "key17": "3LnhYCHLvAkKrK5ZX8qtuY3KbjyJ31tpWYC7agSncvPKqi1Xy4P8vUb4sBGjmjpScnbUGHmaYVngdZ1NHDySzWU9",
  "key18": "35JjUtF55e3ZVPy4LvMJqdyMJpeaU4Q4pdfnUEDyJsvMcjQ2UebSuwMa5Q1MVAWwPJKSBjA1BxBtMj7eF7wXXxbm",
  "key19": "5uEpt25WiQ7tBBd1JX1BuVL95Uv83rguD2HHFWFKDK9QLZSVZVGWvhGrmPDDAzjyJJzapjFJ6AhTaUyLT3nVBza",
  "key20": "3mhaeLHVkHEwgYE4bsv19WN2zV77LXQPgsHkLw6hc2Vkjuo1vgtZetDSVFKsHeAcwvEzJ29JpGubceSqSkCgsTxw",
  "key21": "3fHKpWMsBHLs9aB8XewWnxLBDmtanPaJcvtVzPhcG8R424NR46KhYT7127qMVuRABz3CGgMXv5h87aXGmj7SHZF7",
  "key22": "2pva7MdXgBjk3HoQLDcY26ZaTanicetxtcuiHy7WoSJBbWpyFSCYMHNTM4a7rtNnLidWdRuiYqf9EnHX2e4TdDbA",
  "key23": "25Gqx15PSg6uGizv1qaEvmcSxBx8vas6irb8pLYTDYTyjPhXVaV5AWGT7p27Fku4pifbmGXovUMqFnRWAEXCh1BJ",
  "key24": "65a2u3vz18vJjGnH5JR8U949mzgeMDm7QLqav7AdMwJ3pcZFX9sLbd13arFJkTpGcuaPHbExSEUPmxwyEaDMkU69",
  "key25": "eRF6tNrGeY9eeGvCGYZEuwTMsnnWyXoHmLNiwNut1pEZA7VuTFYJC6k3jyJsGQHsAXZW6idcq6XNpUaJWbCxNNZ",
  "key26": "4mAy4jg7mDttWLCEbjoKtAEipdQcMQhBwnbBny5HGZ3bz4bpDRdZ4H6u8mx6wn6TR3tExtmcpTv4ovtiAFaVjLG7",
  "key27": "5uz7zBYuwwQ4sn5cYhi2rs9f5FXMKxqB8w794WYjkJCSYnzLmaxN881tmm9EXTBRF98eCu2GCDNoEBpnLLxKinNB",
  "key28": "2QE35z2pFyPPhwpDqTz5RThWhjaxcAhVzYdLGUn3ZzY8Xu3jeRrpkJdjSuhFguRfBjg7oz5YJah8654UPCRrLLHn",
  "key29": "5FYuZgiTVWh9uEx5szKVbhbXD6trLeh35i968yJzj5YmJUqNCXbemAeW2cLX34BamwGThTb3n71ygoEqkevTpc87",
  "key30": "44sQLxtzHPJQ53VPtYQvByPsaQmv2HdJiep3fQd46GWmA8JB6RHPWEmSVaC6KacXEZpXNfjveHHjrRcj9QD1NCtX",
  "key31": "2AhvLhoW35BxsTUQgrJaMF8e3eocPLbZry3jHpwmuJtNBD9r3yHWgJUE2TnjfM5K7LkHtrBmmEy6NjPUHZzTdrBN",
  "key32": "2sMueUFk5SfTspQ1NTnxLSmPuibC4tFzXDXJNJuhqQBanPu24d49VANNweccCbzuwgnhYr1wGABoVPtQXTHHQ1Fn"
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
