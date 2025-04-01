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
    "2zyeYrhyMF6wo6B8g39V8EX6pq7hn1Chk9bxrfm1VNRrpqqEzZvAeE4JEypSUNtCuooMWed3wyTFGfUSdQkpjpah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WgfECDb7R9XYWhupHy4VojFPkLLVTQysyZ6Dnwde7RSLM2iP5pZ9sSwXhkFoAiXK5UodR2hnE8JVN5Me2s8ngPT",
  "key1": "2vDq1SN2FtMCK2ASjyJrzoDeXaexV1PUiCBiBRyVzQ7kEKVU5eTTMcqWfh8ykNakjhMHwVuaq6APEgneQqCE8mo",
  "key2": "5BSsiKq6YD15LwqJrVSYwa7ZQafCyGCmNreufqCjEZvz5vpokpSbUx86DzkmBZjp8iwtyydd8Ak3qWRhS642amNZ",
  "key3": "4rJbV8ajKbFvzN1WcoMu6hrwVRLKPFf1vZkEVDvzqtUA5rwY9jaMKrDioRFrz13orw7kpLpVHJocSSAmAWr4mvY6",
  "key4": "bBR36DxSY5YfJYxsRZ35fb4YSeXTJTG1pQAJvNTeSxHN4vvjQsScs4ss4kuaQrv4rkRcd6HzENxcg5QKYp28cng",
  "key5": "6fLRkjcMWVuzE7qw7NxHph1Q2S4m3ECnJ9WBNzDTbAK5jthQjv1GUrfBGcueSTV7oPaYQpJqzWusFEeRYFYFQ8j",
  "key6": "Ke3cRoKXpH8TBQaxet9mJAPmVmqtfnYFC8hTbYJa8rGw3j2BzU7tAdS7J5UeY5mSmsWKXEFWVCSGa7mjqbYj6J7",
  "key7": "2neiEx1qJdoSLpoeKwDLMLqsqQyxCaFMZKsCnWadndooAkfhpM4YjT8A8y4sqfsmriCLLHgR6LkcTWUkGUNbwAR7",
  "key8": "2u5aBmCCqdPtDLX32TGJ4KyNjttkxPA9cBwEFdTqzNh22LuzUoGxZ7ZX5LXdoJSHBh8jmU2yrRRL2V5LxK6fEpQR",
  "key9": "5aK8X7G1WufKrd8qxa5V5VBGnH9TLWtetZih7uRPhX1sG6RLeMp29SUEViivHcw7XxxVqcoEPgBt726ALZ669iSi",
  "key10": "3rygMTrBgaHqqSSdfZYrdxPWRpPfyWduAE5hHjzfRtg7WNmPZmFW2VcyzZx4N79Pn73eigcoQp1koyVjT5CTVxzn",
  "key11": "5jc3mjPUJrfU6RsfpNm8pXuyVARUrNE3ozys2Fw7sPsNANFXGF5AyxJL9yyJuU156FeBAcLHbKKyZZXzkA8gjSER",
  "key12": "2KQe9QdSHYyghKuQDGbeiFkg8oB8k75H9akpexnP1WUU8XDie7WA3yaMfEB5j86NDJ5yAzVzSg2k4Pe4wRNQ3beK",
  "key13": "27sP9DE63wfdw8rUqg2o22VdkqrExRsGp8z978fYKDwYmxxGQe9Jo8uTgJAkrDWz7MUtSmQzDwxuDamjMvfzV7LE",
  "key14": "5sn1MDYF9SHtCd4homoedNad8kXh8jB9Z9oJHaAfUM5ZaBN99VyHZBNUvzKiM58wJ85JPHsnHtvWtNPWbirvLnNz",
  "key15": "2Fq77tjNYb9Nrga5ELDX7u3CQNPH7NREkAH1ShJ1MR3UzvAdn3fHKNXbprj2t7BMi4LDU9vG9VursPXdsMcSU9KR",
  "key16": "78tbBmKqe2c38Bg5EGAF8ASmfmVSwerb4CAWCL853mH5RMmGg8zMgCCkgHqm4YswYz24qqKNWw6sbgokqAbvCCe",
  "key17": "4ZikkUm8ekEYjxfd4mhFvyA8kzraKjf2ajpLALmNbAvh2btHyCcPymZHDzLkBETAs8V8qD9b16E6He746ncJdn3S",
  "key18": "5L1X8dAWW58P5uWPf2SHmG3RLVa9UUfJmtm6DxqXLbWNx6ZzxdEP1649jqepEHviK5R6U9t1HiKgtSivBs84Epex",
  "key19": "3ZhiSkyLdKztWmXuRxyXio9dcGJ1RQivCi9SjP4izohGALnKBYPDmz3fLgiZ1EVFpmCKwm8B5nbiz21dQwP8zPDZ",
  "key20": "25r6AoBSBHaN71MMuBR1HpXi4R4quL6dA8u8c6uRa1VNr6J4bErTCnuLy8cdb3Ce4daZ6jpzS6zRapCxjno3zHDD",
  "key21": "2ToYr5P7ojqvChrGNTAjBL75uXueAHUsu3PB2ABRbkmYKHgY1JJjGD81pKazqioCqoJ1p3ycwzvgvuo6VE4Th5vu",
  "key22": "3S49Th3iKRAoeVK2aDTWJtiGJyhWwj4S3S6Fcf4kQtsj4tWtsNtxBkgQwXaeLk8odPLvfKAA1JzG7CgmbKcQZnzm",
  "key23": "34tpsmbPVnYkpBKs7hYv51ra1WZVptzy6uuT34jzVThzAf64XmfCZtnnSC3QXhgnFaFPmSUW3prgnmfd5dLq5J9N",
  "key24": "xHacLRebDH9R2U6qUfmucGgYfGdFgbaN18QKBBgeTmY7A3aMsPB3SXSpX5jVkR4Djp1bh5uKhTJNpsxR9bptXht"
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
