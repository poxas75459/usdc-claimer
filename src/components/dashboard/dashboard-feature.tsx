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
    "549wL7SmQWZazyE4ckUhwXB2T7qMG4nrxpPSGesrEtUknigMA7FUJ5DBMqtHta563mZ9MvwZZbFPBXQNrxug7Evw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdgs4xVSTRczReHCsfRfJAjG4YUsEVvogc1hg1s6RudLupB9DJwa1MG7kzEyF9ZbV1DWMxXU24ub8N3PFTknG5d",
  "key1": "2mCpRnWmcurpqH9RxEjETG5uoxY9iAxaFCYjvyDCpMfYPCBNV6pQ56PuzQ6jwbh5vaEiksfBeA2CuYRgbatYV1fK",
  "key2": "4nqDLCZwW7P2PhZxKNByuGLv5WGhjcM85y5wUnULPLj6oLJULFs8tWeazCiDkfkVXHvNPDwp6ySaDwyerWGKMM5H",
  "key3": "2ayX2nKyEwZZ6ftSDArqGj5VZmnnEBaR2JZS5J62w9QfziXjNnjpj35MWcbKZoZGLZGZoLaNvYT2htgY73HL3MJ3",
  "key4": "dLuc785LjWS8mp9zAs6eXFtDvfHR3TNVMgkJi1Ucm4LwQoMxXNS8QqWKCJdJiLHR3vUAjsFYGmP5kezSSAAgESk",
  "key5": "3uCGSEUxxmRuA9aEEqpJPfCwERQteXgQQkgTK4iqcPL9Wui4rXuPK8WQ9Q8vrU6yDrA9qgTus4yKsVB98UkM2EvP",
  "key6": "svdjNCmdJGLV4PtTMwsc6LLkKqAqu2a7JaDSEpeHDy5ByACADdJCSt7t1bqQJwzhU2ZE6qgojNCguLrpnpUhLAM",
  "key7": "3ik5qxdUkCJVsa3nsnA9EVUQkvdPQn6BfteVEX2QcqNjbGXShFs8YctzfcWhzDMkykJoazjbovZhW3RJ2LYTkXF2",
  "key8": "cVCphqLnoKJBL79QLvFy8TECkDB6QaiVib4UUfUx7DzYhEvjr5NmbG8qjPXNMEXkYLeo5ppxaHSvo1p7MoXvWm8",
  "key9": "4FLW1j3C2ocJ7sYiA9VMujd4m92x8NyenMcyjCWbWjwjnyK6CSKkhSvUippLdkgWC6sCudK8tEh54HXQqmhLSeeQ",
  "key10": "5eY58kKeZBsLY71bB1ysrouL9FqhaxxtwK3K8Rz7RPvuFpUm8bwaoWow4USie1akEQ2U7de65kcRv9wCgXfkhTms",
  "key11": "5aFhA2W2BPSeMvkgihr2W5EgHrZxQ5keBVW22UhL9pPEdxmUNiFkygv74rs9LwBK3dJEzvp3T42smMwhuQH4uD3q",
  "key12": "4be7msHbA8FuhBc6bk8Ptg1Jz8PnhHu8jkmus63NJk8DwD2x18DqA5wNJb8DhJsG8LnaCTY8fB1RNuye1bWFgBxo",
  "key13": "57ZUPDy6hbWmvd2v77JRQJJZH4Misthg6wVD24EDPhKpWvDRLebw7ncY4yJ7KUAcsrUF3h7YemmK5APFfTGsB4Au",
  "key14": "3QAiXBZ1dUo3BPz6Fazbsa1bndvAYVMPVL7FDn6zLAhYEqMjBBQPBEoEWJCfivPNiSH8MuFDsDR4Fc2jijfZKLKM",
  "key15": "3DAbeAUvvekNH8BpJkE4MidP9DhDVBgumtmHqSvNtusxx2dwZdkoqgYzFhhrjX7EdAdZfa5zjn8zWS76uTSC7L6H",
  "key16": "2duVB7R9MGdk8ymPEdwWfeAHQLw752QRhXtrqVoWJiMhAgUFLG8u6Huprexb89EZ4CwzGCDHALnYzUfVSfNNgYCB",
  "key17": "2jNQVbwdw1HrD7auwShtsq3rYkyWUEuBH9ZjMyLXU38CSF4LLCpmWnWubxPzcRefE6EQfSogtgEcJY4qBEc5zuGf",
  "key18": "5XHoQMvEjE3mjqLxrHH4XdgWFFoCK7B4jGo4cFqE5DKVDow1My6dEdhQsi7gtiERLCnQYCyxWsq9qg7p6fLhxGj4",
  "key19": "4XsGGqfNKCwL3h5ZA24yJoSGR9r9H155xXaobqz2BY9i27vn8jj79UNyF6hwWeZhWPBJ62LAgszcZgtPsuWKtZ9m",
  "key20": "5iT3hNf9jq3To9TTEX5eu7eCSs2oDGtqwgyGXFBGaeVDSynxM8kSmksEdue7P1pnAgMc2vSLYJY9GLkHy4DiXMdP",
  "key21": "5PVirG8UtrtUbLMLTsK2Ha8ihYooKpGfrAjULmTNib8ojfhgmR9yzk95jg7juCLuezXHgtnbzgv32LzWXYrKrrw4",
  "key22": "3Xs9JFJ1QJ8UDLjGkVZat2WuvhQ5YekRmBNFHscpdWz9J8TQxs1sffxobn3aZruRPGxdxFdD88vqz5cgSqeswRg2",
  "key23": "3uM4G3gXJjW3HdLMoaMjLHiq6RugAfGXxPHYeBAPDmAY4z4JQDtUEaj4G7VP9qnUm8QaZgjvcnLvFn8VA1QQzhwA",
  "key24": "5NhtXiLjLxXYBtXdDvjoec5yf91f997qZcjP8V3EpdYtKH91nEzJmPXhVky6xwjWsEETeuij94x8znWbcpu3Jvci",
  "key25": "35UEdkFKzDiq6wDrxtpC35PJPaF631Uig1DscdVF4aRSugnX4WTtWHzGomi1BdtX95hrBSrJAaju1yB9kRK6PB8A",
  "key26": "5S2UrBRa66xptsYLQH7iAjJ2vuFYnxWVQvyR4haDNqrTASaQGyQ9rpWb4hu3CKRBcnXPX1WyX4ZzPDHZkaERy8qd",
  "key27": "3hfmxTVcmpqVKM4q2ZvANxS2FjeZSgkuarRhchfkf9iDAgX69d1FbtXsGZNZQRSEd21jfFzszjCsci4LRbtB1Npu",
  "key28": "2vWPJNJaUVGUMraNMyKSrdALyn6T8a5gQ8DRjKewnTb7E6VciRecmmBCTo1ECt3SMyyMGG2vfg5Y1P5TcZNb2aN",
  "key29": "3DW3GTpyUQvx6URkGj5GvQpGxreaAMXbJUt6PM2CZWRNRFSuD2VZxedLyjoH78pB1gmmkeFRsnDkeGPPKF295kYh",
  "key30": "3n2cJ2aGSVfwFUtED4WA3bgrYt7K1eNfPgTVE7d2aY8GHUBFSnHJvHvAeM7DMEqgVkqLiZiMdPNS6MtHFCVJHS4r",
  "key31": "5f3zzf5e3qHRsX7zsV2jZC9aYE2QJCgW4cM4eK2PrPrzihPUMd3HenPHN4HwFRhLAGo6fzZh4PwwEBMQKowMRYAA",
  "key32": "2bRFmmxTpj4R6WV1kijuoFZf9Lr7zWgchP529AizGYZxTz6Dh4r6pYsTnzXpwLAkiGSbwyVXWQcZTTA61u1WjVaQ",
  "key33": "6465aeUavpm3Ww7EfL6QZjrRsvBLN2BRFzgcuwp7spDvWxzm5yUKZzPQraof3usn1u9MGFyefhqReZ7tzSz4eReV",
  "key34": "tePcJH57a6nhKRRsZe9r2eKYHLus7c3uYVnUwQKFUrpwpNamutmWvo5f75uwyWre4UHPP1Qj8SD4tUdDqobZbnX",
  "key35": "5S3FV8AfDSninrpa71i3TFxGTYWfnfn36zdAaHUKrnXJzaNXdGkXhTViXT4t8qogRPNC5gmZKRE3wKpLZ6o7vFLr",
  "key36": "5MRXUuQ1S1UoDkB4GTJeita4nSKdhVea78F2ywY19tjjX3NS9cDQryy25KaLcC1UxFVp8ztpdkj3KnbCBuv8crgj",
  "key37": "4goVtKoTLjZhacLskgNtECLwJFeaUi5QAHyBd5ddtNYyen1TuufSia1KvGuGHpBf5NcqzFbvoEZVJ8W88mwdU2A8",
  "key38": "5oxk3LtfMKd34AdTkxKBmkxhcDaAbDHckkUQ7NATxSpc7mbPJUzLpAbPa8kwo4B5KHVyLUNY84xqkuiXEFq29jja",
  "key39": "nMBAE2im1TMMRyaBmGHBeqwiW7tXxoa3Sv1zn81xW4SPP2deKJeHJwzXdbqQYZFQBobpZJnYCWDteCvBVDV7SFi",
  "key40": "2HWigmhypjnLXCHtTGvFsBWYRfDtXp4wmhy5q9ozH6rBVuMdpWX6yUaCNwmuE5YLJQDjAz9UxeKxCSFDuwJChEsg",
  "key41": "ZqJcynnb6M64FVzm8KZEFBDqCu9WpqKZNE4sSJzQXToioQWUuB1v2Nc3GKngxgZNt9C8fLLuq9wEf6h8p8hdT7g",
  "key42": "3xPJsJJQb6HC9pV5GGrSY4ebmdQi9tEm4mJVbNHLpCJ5MWFLsz3NHyRbRFPM64zDCZtWtUHskTRoUZSksuV6p2mL",
  "key43": "59vHbHGuigXu36Gmrx5UcAvuPGBNCvd8G5usrtn2yqMEqtr3niNGXpwUtt8nesWeycffSEBqNP5w6q1EQ9faSqFo",
  "key44": "5GXXBDHcafozue26V19TzW9uQ24AGQJ3XCFmaKjicYL9f5JX3RU26ozsx9EaoaNKfsA6LHQg5h1gkZKNFBSaP2Ta",
  "key45": "2LVYbRKUN2T4p2SGeRhPcNYyTs4JY8ytpmkq9BeyQwrXBaKBpoMf4cvCP5byofyWTWfN6Mwwu5JRT1rF3omy8mfG",
  "key46": "5HwjUbmB3uiAZZSS7fGjsp2jmk73SjNNCG2iKLpjvs9KpfHU4PeGRUosRiNMwcNBshdb1UJVawDLMKYCuTrvyG5L",
  "key47": "2XTd4z8kFijFzA14PEAxwgHfCVtoRiPgfcG2UQijBr4Lek8QY7DXL6usedp89UdfpQzKE6da55aSsgKCZ2dgkoN5",
  "key48": "2EsiMgEGBWSec4vm5oW741DrEaPu813TDrUAxrvJcDdwTpRtiuCFYqLTL9iPq4qYcG3fWNFSEYHqhjRBwb5oRTcF"
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
