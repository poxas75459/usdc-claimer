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
    "5P5A4Kp81q1JUPuhQZFat4W3J2wxNSTiMN8NcJHRDdFLqsRNghZvTByfbSVtvyQNHXtYPZwCa33kZmAdNJVegHKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HeSB2bxZi3AvHCSNWZ6fjmmZs5vkrdBYceQFXWUdi3t3Y7N3RDkzuqRWqdymDn4cG6YJuXuo1vVwch1RA6JGiLx",
  "key1": "2Esd3FAjDVnt2bSrs7vLyLDnCfP9S6oyNxg1s5ar4YDMgdsiMs3LyPC8Y4SV57TsX64da2EnJ7MhGb1iHRAzneNu",
  "key2": "35expxJacUAZP7PYYSk9i5qHbdWASmrPodhcbACCaTNPj7gJa1UJyxeVak9zez7T1Kq2JgDnFeorxGnUZcDtJeJy",
  "key3": "3NscjtCGuA1W6wKfdPCJnUrCNxCrace4NFqCDiKkP9Q29xa3Na4iPEwrPDr3DhaLCQv9ng4yy9sf2ykfBK1bVM6r",
  "key4": "h5hTBrjMCcc6cKbumfW7SY499ZHECaVtRGwaCEzPdNYJqehbFVjeUw3hVzGgsNSnL217aqEw98Drb1kGHvLexy8",
  "key5": "4wJHAVWBSZa4LwdwBVwg6EeNk5qMW45Bwzsx5kJPnKyC6XfiDKyvSGPGjhUb5MFrGwcaQD3DYsQNs3VB9aKEdPZ3",
  "key6": "2q972EJdaJddVDB7vsUFYZ1cd7WuXzDzCSY5Ft8FaJ8ZL5Urid7PaxjijpQo2frwtJ3WwU7hRsGzXpPkHRcpkcu8",
  "key7": "2nZBeXiSb4WXZNP9rHHUBsmB5tHmyTe6AKVHdMngCvPcgTarCMzAppEd5p4hBza9F7nrKag9yoeXsb9LaYPWV51P",
  "key8": "4U4tkVp4iLiYjv5ZYbghFHaoUDwrC37inyqh8sXhTZsmGhSmjRkHqXrXEd3xCWJWwEwtVRJJw35CDLmymkFWakHW",
  "key9": "3vQACJkNo9A8WkQFJUGgBKVMtW6y8ccgEYS6BR9VWeShQ1wKhrHunJnB3imVZapvaUoZonfjLG2ikJNm1Mka75Yo",
  "key10": "5CWnVkKKTbYuR3TY6GkSbbQy7PMHuURRuq5syEMvRFB7u8uqxQLF4HyAA5AochYVbNxurxMZzjo4rcWLGWnEyYHs",
  "key11": "67LTnGrFC2tkfa5WtCXasS84TuBX4ckRCcs9HZbyNLFaXLQQdRzLcC7yVEa2PTQWrbqCfbKWMbD991DC7urdYNt4",
  "key12": "5Vyog11WL3rG6KiwJ2Vj2rUACEM5ENrsxwrQg5YrNp9xmDX3nxJYqNwzxdpw8wg9zfxbpcna7J3LvbshcSW8rxed",
  "key13": "5FZp83nPH6y6cZDcS7YVbnh2JzUEBaWL57rx8qUhsFxPysXcVvu4to4P6HUysTGPhCUafTGrHXybvzinNSgZrofi",
  "key14": "2iRoZptG7HNdSp5gEFpcFLNo93gc2tqBPateQ6TU5zwg7SRLpbx8GbehaUzRZNjyuSis4oBMKEjpmNGUufY7raP2",
  "key15": "2ygUwVngKoWPkYdfUMRAxRormsGw7JEKdG9CypZyKoa39PxJiE9d3vFXHScDrwfxmAVwR3wCLF9726HE8uNofGjC",
  "key16": "wSy9DmDKARv2NWk9tQ5JgST6auDJ63MfokftWS6YuCTK9MZTce8uyMnXF5DnAGZRxLKb8BiCaAZUZwnhZu2Hpx1",
  "key17": "4nE72NhYTHUXMLCg9EDeBvSMZmnRZMmgBGGHt25LMLtMYeAW28aTUV87FhHAm6wHEzsro79FVRw4A5Sm2AA5HUme",
  "key18": "66fVK2rafeyvb3NzG2HZbxgjocCGeyhXzUxedJmpi1zdU5x9XZSsEKdrT1aXFjufK4RHsEmikQzYEE9WTgupXuES",
  "key19": "3mscHX48CqP1zGvLChubzs45yhYw4hMhjwRGggpW12P6UC8zP8QLu9S42Jkcj2QfB2aGNDtbGxSRX6SG9MzYLT7X",
  "key20": "rWqK4JqnX9FDFf2vngsjt112eH6PDZSoxCWDXdf8vFrKUjExTbbqRPn8QEQutVQHTG2FBP1uB5Us2xmF58LbgZe",
  "key21": "2MqvhEAXfbJH6yoPNfkm8wJkp1bouETJAbuudTYM6VuWRf3qcXVhdHgSrTjUcMFR8FPa9NvRLJW493oQfxJhRU5W",
  "key22": "5BK1Z1QnvnH78Z2oR1oEeeeddu6HVycJLj9WFEQZPWydjxYYD7C2fNYCFkG5LXZuT3YT8GQ6BQWaNthQTzZBLZZs",
  "key23": "nz2cLv7p7g2Fm2kVErMpGj9r3vHQ8qMBoNH6ThT3pkM4g2Xbjo4an7tR4PKhbgy9Z78rRszcGZ7RCyNgTj4gyTH",
  "key24": "2MaiNhbj8zgWcXtyjA5g2wU6wG7Ygdba9gvnX9gARnLiM7cqFyeJ5xkBt9APaNjwfCxRpSNPtAkiB1TXT3mhQHCb",
  "key25": "5ofFbqWH6QaNAiqB35nAhGnY4JNJgwHcwaKLQTAcwRpoU3A94pH8Uwm6Vd4cefcJ8g7UskrkiWS3HdZjwUgLM4HY",
  "key26": "5oa4h81KUg9mZQpRG7ZWDbXhy4oHSA7AxgYWdJba1zex6jrf5xzcE5WkTQfDoKLS1VHmg7vSHycCt3YkfJvYbWf6"
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
