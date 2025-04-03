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
    "4zhv7TqEnZYRTPM8VGbrzfbc5myT8nqhSb4XhTGP7S2jUbdpVmGcbLW3ny6h2TDFxDZwq4Q9m2fLiAL3uADVJpxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Je2Uj4kt3TUKxNMfxHjLebXTD8HNm96QDrNjMhcE7nkvWguSfym2LnmtEdipE33HyBb27cukADXk69Z45ZpTHuQ",
  "key1": "5YtLju2qWWPmS5oMDdCoFAYSuV78h8F6176GS6uG6xZwFAfKpjk3CKhEWxiXHtuZv95vtS8GqnwWZsVdwrMEgpLW",
  "key2": "5ng9AT2qL3BM6mX5zKxmze95r38po99p5UrKt5bt6ACLF7GmJzdMdy6Ycgj7LyWew1EdrToyYWp19gWKqG8oHFjc",
  "key3": "4vzjtLCxiwgZ8cNVcmx77oadm192FNsXZviK1X4YiBPM6aXZbaJ26z34AsdsNd7XptaXvuic42FcCuetYRxQt7QN",
  "key4": "4pdyCVSKmW9FeDmfKpLgX8rJkmDYxc93sAMd2DTf4NcQ6q1PwaG12cYenoySS92XJ1TQow6yAfVPYiZpw7uzqzkY",
  "key5": "4aBNN6NDZjL7CBBxL6NEF3jqZ1EN7gQUPhweGDLQ6mwzsc3LBcL22G4d64WguVZMjjkmbamiFw9z9hD9ubVtDzzk",
  "key6": "4kU42v68zy8QdeyaNhgreGSKKzYPWdTPS6PSxd6ZBywUwXnoUBU7MN8g1uJrHQt41smv7H7K9V7kHVZKFkcmobcc",
  "key7": "R7wE5fiWRUtvZuC7Wb1vo46Gh5Rc8oUNAz5um3HTPbQYof8iUtzokQ69HAJvqVcA4vSQZv2H5d6m5imZSbq9Mfy",
  "key8": "2CGakFKuzp2gqaaZvFYF1cHqhWowrQwwEY9s8Jdjs8hYUtbxUQR4VUbNAJzYADiApqdjYtK75iHLZfRXvuBjngj1",
  "key9": "22V2XMKWqSGbLAH2Vh56oeHVPa5fZQx4ZG1PyGvJGDbz7btFeSXEk7r3RJb5rPNLApVrFtgqkNGkySqiEcqLmY2L",
  "key10": "5Bbjzwr4ffmci9R1UNUXBg3qqLecn2P7k3Zs9MRSSUiqMRi4xjaxDfbDvvk8DJ8EMH1XBWKxmAowqazWtmg4bcwY",
  "key11": "2Pk3pFUb9k4Hej7meWvXyc3VD7VUMDTZJqdyfa2QNiXKfkQqQctjMkgGmXZst8MDLcbfRW86UEWeH2yhWAW44hSe",
  "key12": "X2MxuEmpEmv1mb5RTbvc9VBdx54acjCUP7UxGgGbcL4ZEKBrk8iTS4jLJFeQoCcq9S1i4nW7JBxKwNZa34bof6j",
  "key13": "gka5QU4aXVJiYD99TQVTCxnLBA343nRmxTjytvrrc57wvX5VUfFJvdC2JxSf8b5ZWx8KY17MJnvbfXd6FNC5dGv",
  "key14": "3B2DhTZdbgskLgS3cnWFYwvvDRuDKeFSPteytQfmhg1SU5DWXPH9jZzKTZteTJBqbddcqThU6yWe3AXeCTnyrtNH",
  "key15": "2bap4r6W6DVffQEozBdyNrhmjXbHsKxrYGM4fQ61us5FJvhpLYxrCkaEa8NGY2cyHVGuS6fWfqm6jryko8EydsYA",
  "key16": "d5Ed5JNVn5rnCxiLsmwaUbdWtxwZLfHvqMg5UuX1H1Jg8Hkm3QFTPuxzPZ18jNfARJzP8qEZNurMCCrcVuE8xkn",
  "key17": "3wkhBUVvTYkBSPChrqo7wojRXmaXxigqiyXHyCoLprcB3ZoyRgZ1Nu7wGb6W6gNCSPMPZUog9FThDbo5WBM9AJEj",
  "key18": "2ktozf8XXvCXzMQhSfBvCP2pB27th1nWvs6A9NTpWJP4VRPj5AGUfMmj7uNu5H1yRLPrV2wWNKWyivuSAniKv1pM",
  "key19": "5PmGtSFDFAApE8HnL8LkYqNXHUieeyLHLNDWHDbHiJ29wbd7VY7NXJ7vBQsYrsUAT98uyGk3usuoTkhwnfv8AmdH",
  "key20": "65MuMMKAZvuCQAMcBc9JuyCtNLF6f5GBuoWDiyrcGnG6NdoinUVJNsQNi3rPo3TuRwqaE8YB1YvTwT6ZmMxGkgfr",
  "key21": "4LZoz9Rxw9wPYTipRXuqbJXGWCVSvazswCA1cncY9qTFHMsS8YtiEPCVET8FM4Wq8tq2pDJPFAwiRa5vqtot5aDw",
  "key22": "atCBr8NsH8Ef6syYcw77EciUkytTFEbiDgNNDxqHPyXoK5XbxmDvJTfWFFqrYE16ccXJV3XLJE7YmxQSr5HpY3b",
  "key23": "5mepxQUNXAUeELV5DYS35H9hwJyHQJA1ehkCdM6sMvGPLNiigsjEbsAJvLEp6MBM9QknJNGMDpDNk5kNNcKjmfgN",
  "key24": "3DDCDfSjp7CWwJGbWq35uaMTS4MyyNyA7F51BrvbnYWYP2GSogfJvEnRrg48QrET4o9jHQgo9Sq8nCRKTDwx4NrW",
  "key25": "2XuXesecAKYDjC9tKLR2izNtrcrU6XSz3NHdynjCxq9Rtw6J7xPf7QQCtTfBQESLn1PXToYsGNg79chbw5NpMBHZ",
  "key26": "3u7hw2id9JFHpok4tJVLsmARMMFMBqLpRjgCxN1d8ZfSdbqR1XVfMKfir1bf5xiVDWSwByeskef8xcBPmit3Ky28",
  "key27": "idb2RuHXp4QFxW21aLXVmeuSeD6dFfmur4SPkfFSCzhoz1HFSuxRcZuPRY1U8RHca5RGcTG7WPpySqCcYPcNG4o",
  "key28": "555N8e48HB2tfXsC1pNsa7qoCS1nGAhVLE7MS4z5F4ymnZr4SmS664YMzsE1xUh1T1ndES24s3CoZEEetYC3kGH1",
  "key29": "5pbvhaq8NWeNgFm5V2aCppZPiyBtVpuPiSUf6DnGKfo7qXfZBQcHz9Wwa8RLSBBnrVDKUkkjRp5LWYv4JKg2Sbe6"
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
