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
    "4fYzgCnvvSHCbcZE13KeFuL6qf7bUfmJhff2xuLMMX4gaVtC9aBocCE27CB3mfbWWQB1eFeDQjNWBnR1cadXkXer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qfFk8PQvVgFdiw1r5URoWEwLkpBn2RjUGoxsbd7yQfP4a7G7kSuk1xK6ThSQWSL4G7bD9buFFQ13AL5ieSzSFY6",
  "key1": "4PEz17u2UgzY5t5APbc96Y9ZtEG1yuVxqAHzWv5o1oUevt9teHVgkgnouTwoBKL2Whr3sVQej5rzLvRtkyDmjJRu",
  "key2": "2ouAgMygamyac3idLGoe8yfNhF3NVKiNWvt1huKFwjozB6zF9wuP4xPymPsBsUaYn75tmPcK2JyMggr5xVXk8STi",
  "key3": "4y42KqcM7vvdNHiDqh8hAGTHZvRF9J47L5nZZ6XArQrAciteiYiW2g3bJzupw58fMQLvvka2DZLLB4on5kNRZviW",
  "key4": "4Tw2WTuogMtGwfBSTKa6dTLFcNbahRd3N1GLeHp7ugqYKsrxuvQoJuaNgXaL9zV6nhv9puswePHi7b7pnZQwx8FU",
  "key5": "34msjMWiogurVwJ7pYE3KBACAD1LfejCpMUsDPWR6CsZf2cFNv7QAcHz8wMeiESeYaZH7kreSAwDuQhbwCqeYmrs",
  "key6": "48dqZmxt1Na4Xem4BJ3q6GwFgFjEnzGwkYi2enLFtLqyw6foYWbohVfCeJLvTtPKf1rwzypCRPiuyYueMckuCwDF",
  "key7": "2dehdrxzsfY5zKZQjE1qiVB1W6fJK17vaK6cTG6t2KJQCgGKHcW4e8MmWirTe5QyjAZguYtKhVgacUj4n2mnis1y",
  "key8": "2wBHtBzKoCSSxWE5hyJDFvswQbHUxzgXVAxUUrcjuDTh2bKbjE5bQP7fuGSpQZwr7Wf8qRJwrETDvXyE5LvPypuE",
  "key9": "219AcDLFVCqbeKzVY7MoAVJ5vWKFdpp7cj9T99sswGpWWjZPSAbMVLa8dhW4n7649EX35QkMd1iNY7b6obiDdXyN",
  "key10": "4GxYXfVJVN4Ze8XqwWsYLW1LQnp1pBoDow1DoMBtcfu1fnf7UqBRfA5LLmQCaUwGbXZYwxKXb9SXWCHX2uMM2MsG",
  "key11": "2j4L2niLWBbAdGpMWDUUmALnr2i4UP6KdYNQ3bYqYB1z6q8MiDwiNNCUQ674LAeyDeChqcQDjWUpKKGYocrjxZwG",
  "key12": "5gAr5pJzf2Zz2ofELTAnUMaE7LY3Hjx2WHdEm3jgnM9CYM9wEeoD4qZxvCbS7xoc4uJZx9zSiC3NGRG8xqNKq5vg",
  "key13": "3giDKsLJhqJooFKXC1b76o2Gnt2apfyTR8oDLP3Td5qVYWNQ3i2rpgrjQSUiyV6ZoymczgwfTEePbf46S3J5iaiP",
  "key14": "3wDLAmcAx4UeE1qSTRXpgmaS3kyRqjjeBY96fFJUssCQQAbVKtXWGWwN8Mr42Ncmtpx2rHSxjMJipz39HToARWRJ",
  "key15": "4EMCHvDKPXuta1Gd4ewZm9dtaA6p6WifWzmfA6vSMFZmBDFvYSP3a7nSsiWLuFpDPRg9ejTyZ154x7gKzdLX238m",
  "key16": "36phQRQpzUcTA5qEUcu9LoqjdifMuXgHNfsD44hUSnQPUQCqETqeJZy99Ku7eaXhMSqdjf949WWifv6CFZWgvpU4",
  "key17": "MVWuRFLGAs9s8eXXbAdSSFNDvMVhxfbAQrgDtUooLv5LkPVy5R71kzNnaPJsVqSdJCjdgXd5MqNdSRDqtvyXUWW",
  "key18": "33Mk1ZV2BNrzrCLfSE6uPG6Ua1XtHHt7zu1SEmRLrDh5F6bsdBpygxDQpuq9xjWFVC3c8PowwZf7pVM8M31AXq8f",
  "key19": "5zMJe5uZwL42vRCc8CW84RWzjdFGefLW2u6eeed5QcZciSjvHKR5C91i8RsBZ3f8XudmBFu1fM89AjgkrjdfyRx7",
  "key20": "3P5PZrkWr5W7E1FFp7HEmjwVPAQHttWv3B3tetprEVtRREdd23GfsgUUXwJw4Lkm54py3g1JrD6MCGbo9V45YGP4",
  "key21": "7VmKJL9MLCtzt8ZHmZwVzQB9qtoEzTZFR6bo6UJqYv8Ssj5UwkqnJb718LBCJpGbrebUk4DHrdmxgmkhzYrLsMs",
  "key22": "5bD7Ps9ruU9kc8yKJD5WgSDJxK8vAXHDVjcCYbrA9KUwq5umfQxrBMuaNpX9FnUtA97eBVieEdDnSJBherFJJvZ2",
  "key23": "jQmeQsuAtgcVfxkeAeSJBX4ECMnNNRKbnBtrfr2cc6ZZ5jwBbCXwMnSiD3RJ1qtzckiGsTSxDjpdGVrwFad4e2e",
  "key24": "Vj6R6Euyejd2x4XydR5wwhsqjaoR1PiUapAK1pfcYuExUJdaqDHxtEir3xbvDZVhUKw3Swspt7JxmHPdrW58Zy3",
  "key25": "2ZaTcnVe6nCP71PLpdGvmoQe7Hd5jcF1GcSo38agqv32fjfavy4Nqz5ZYkbiXrFwtjxrjDqe5oZKy13P4TGvooiR",
  "key26": "2LzcS8QDB7EYckZaew29Hg5V4T488xsecb3bV62BqsTJ1aaLXTtAKbrXtdWDPMDStmTKh3mhKNEHGaMmG4qv4Emy",
  "key27": "ok9CAiaizcMShAPZaWfDZqCY9XvMLBksRUPEFdZvT4jXEgX2vD6va6Ve2KKLMsjLGCTVdugcAwoURyQ4RvyUCkz",
  "key28": "2UenxGRtXHNb513AmkJ4Wvo37zrH2KBiF5t5LUufVEqEirHGjhR5a3kB6z6H5g7um6doXM5k2pndc7G2Aa8KHTM2",
  "key29": "2UsTDVMNoUzVpGL9hAoyBTsM5wsfpgFaGZd1gtjinjSxRiK1byNfSjgBrD6S5UujuXp2QmA9wPbPdDZ7QZrVYDPV",
  "key30": "3piyEHHsHX9u1w5WizL5LAyeGppqarNvit8B26Ag2kNbVrJsShpJuNTV3RWiUo1QYAYYCWJfxxCi5criE33avNyB",
  "key31": "2HSZyoVzecKCpC4hFoXYbMExeeAG6jiM46VA8P7Varmo7Drp9RVJ5rzzqPSXX3AztdzaWF6y3tHDd9PvVDazNz85",
  "key32": "545LBecD8JAHWsrztHite6yci1nZkisPqDLuxBF8ckkd8LfyZ9crLBoKKYAhrKGgGTyq7aqLxouSxjt2CzZZw9xL",
  "key33": "92ZU8rXF9cJo5J4ZawBHejR5UcLnxu6vED4Swu1r9gBb9fZa1GDMmwhQJ9NHwVj5RVeTuD6Sb5bq5uUSJdjwqr1",
  "key34": "2PHSQruU4S1kCp8VGj9wgVKqBv6fxJcPe4wtw3nAWPJ2VeWFPwfRtSBchvHWbZ9XSdhQGQLQG7xopdRgDhob4Gsp",
  "key35": "SSsPwmezzWLeFY3aA3MDRZDCvNU5AR2Q2bD7Edy9krXAmJaWfDhy9fEdVmLdkqFvHiR9XGtVLcVhh51brjEBheD",
  "key36": "ziuEke1vemMtmwk5cWX1zraaKYyo11KdKoDLU3E9rmMUtEWMDAKbjLkGws5QtreazKmeQfmw3aBd1z9jMmrfLAU",
  "key37": "3TthuxgMbuRYMNg8bNre3ivxeuPRebNhSeFUZQrZvBrscHKf9Q4w5ycR6fNbppVqJrVWzPH3FmHujEreJmdNNsdP",
  "key38": "3tGbs43DXanD9mumg1TqF9xm3ay4ha7UmomS8cC1k63sgpRHwqXyKNxXZ2uVKTh2oFehVhC8Aqe24GVt944yG7uo",
  "key39": "27sHQ9auPx7yJPQRr4p6HxyZxQsjjMXDC6JmRaRrryAxvwTAhMDrAGLyz9GaGJdTbg2xG5bTn212VscQUFm2rCS4",
  "key40": "5kPxpQigLZoH99NkRpUc3kTzfMn3LhyXKXbd9ejiFWHVemnAAJFBCKCedTtmq7MzaRKC2maMcDZmSfaYF7WLmk9Z",
  "key41": "3zePvA8PoYmDM8f9o5TFr4Uom5fFoXDnZ7kP92MWCMaNDpEWyXMxmKXJDz1aQPrZQgD3cTnBEJ6FkDyBPrhu3wKE",
  "key42": "41J1FmXAxX4YecpPAoQzVJC2PB42d7vAJKDMzGrwxJnecnDsbjjhPod7z15WqVCFhFRADyEQyjdXKEDBEWVr7Qe5",
  "key43": "5uz7TJPLabVEggmwdN2GNMSa4RhuZCv5hsErKEx5We9tWsyKPvoKS9g84mx4moZETrCy6ZPfNzUCH8q7oMh7Ecou",
  "key44": "57Uz6SsJNK56g94KCSsmEmGYq5fcrTQePLY7Bnd8qemSAXEcrgrsZhkKUeHPvwKtvUD2SBxB32ihcncc3L9DFVwb",
  "key45": "2YFQJAf8mcQcbWe5TSF5xUnvqLgTdLhboVYzL1UFGFjCGdjfezrhxuPiXbvVsxfkn6SxD8dMB9G5tYknD91DFD2W",
  "key46": "3YgejZWAb8f6KGnWMYFJcX4hn9mB91pw8G4WHVJNDmYSkExXuJ3UgtMBkf5B1HChm6Gt9VK9TzwKrdqwBP1SfgFk"
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
