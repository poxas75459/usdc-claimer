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
    "3hjqVYe7e7Vmdn9Mu21CCp2sDaaYGzAF66bhvHBXpWoKKLxA2YZowYc1gwAkMzu2e1eSXErUjZgfQi4nuZLGk5ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NfM9VzHn6noFUEDBXwqq1JaqWH4wVC5sANFhcQK5b9f5tHgqzibknViPZ7FzZo1h2ip33k9vgkbfR8PfdHegvD9",
  "key1": "3zTwyDyAN6CVSA5i7WdZRw63FM2u6bmofSvgQ6fjANdJm4dzgboig8F7MZYqeKhZv6kCybczAG2imjadgCSNEJQj",
  "key2": "585ovQV8u61zqah2D41WZWBe4W4VSSgANenAUcub2nTE8eHeLhMewCiBQxf4kZycPUQQoj6J9bHzJyvyY4UXMrd6",
  "key3": "5bcoxP4fiS7QhuWvpkYejFDb7fv1M1Xed8MwsfDbzqb1xJHEC4X82RA9c5ahVNrdf4zwmwKsZ3JErLprVSAZX6we",
  "key4": "4tvGybLojmxPMp3mcdy69bLgRtL4Kv8M2Pgr1mL6hpowk2kNcLaw1r86X1rt5uhft5wKvcyS5gz9qbAFoB2Kafjf",
  "key5": "4UpyuBqYJTNXBieNGSu69mP285B1kdiXuXrzQEE9MjUCEdSh3EVWEsDTXaSnSKxN8oKivHfBW8Qef1AZcvi4hFsf",
  "key6": "2y4pydnC51eyhspVaV4UPWS8o1CurzPr1kBkB5Pgv6bkg6ZTaynNwq4eD1hNfvoiomMh2yviryVfE9DPBqqxUYvv",
  "key7": "WxG6tvtGy28Jn7JFNikJMJY7inqReHGWhvZQPkCy34BWzLjGzGryiRVhGNY7EkghSmRJ8fk4znQYfT3vLkGi19z",
  "key8": "2E6RPHqEjVvyH8GsEguzKoSg2UzcjNydrwFYMQCxP9r9uQdbrAn91vgVWBjVPP4hnkShyQ9ouDWFpP35kiLWntdo",
  "key9": "45DMydJVtbWkmmBZRXfyaDH3RJXAhdHmsfw1Ub5LaNeJFpLp6pSr4y2jHNN3DHNmv1YV21duScTfUQ5ssjv2La1g",
  "key10": "4Px2NTArVh294azYdvndtKNS22FKkT44tLABMEeeJDSDZuZGoRiCkoqYffUKcn8gW8ocsNiKh6xKFUE61dBh7rrs",
  "key11": "396UpvzzWD1MU4w8gqLKfvQgGUAnY3pNc3DcfA7RYen2wY6TyiQz7VtYzJLuBCcvhvTzW7btmhGYpfQTTC6tmRtB",
  "key12": "29jgLcCWYpftfMPNsAY5wx2YpzGJrDSg7XC1tzQV6TMxnCdtupA6NoegziwbWLcVuB1XZmsbWMi9ia1vVS7i9zZH",
  "key13": "5diHBN6A5TJSWd5XeqyeJ8uZv6QtVNVAjqH9PS46VSzpg6z7zQ6ig3Rj2XCmNnzNz8hXhPinRchhz5G2VW5NnyaW",
  "key14": "4twzDZhX11h8fsMR2ndoT6gSYJTq9zuaT8PXY7znfHwgk4pmZ6HBJQXTto3aQDSDTX9wovNZUkiwoBQ1GCKjmFuA",
  "key15": "5rhD2GJSSu9oaokuKdYwiovsE33DPyhg8LgD2JnKGt8afopbNDBkuF1A8aLaMyBPqBSSzN7m3QEi2gsBQVCLdVJR",
  "key16": "9ynCkuq14KVGnmhTYtX81VBaTLCP5P3iZgWGBPTbRxeqH8LksA3ojroGTigCWYeXfAkwxWy6zzPti1Tv466tArm",
  "key17": "3ZCiD4yPQnbqc6wyEALLNz9WY3wQ8tLn6vWBVMGetH7P4Z4piZVj826anU1yxEFey4mDs5V5DgMoShbBqMsp9fcy",
  "key18": "3toTozHbj6TY7ZGWjs2QGxNWq6X9up1cRLBdf6w4vZw2iwpr6hgwgdMiFdHoj7iUh1sFYsUW7ghCmvhYHXaVZfyP",
  "key19": "5zBi4bNke6h343Dp9hgBbCe78DE6FxSZVJ4sep93UjSeGZ8WP9Zx3jU1eaL7fUmyoQ5KNqdR5GeDUwSWzTmBn5YP",
  "key20": "3C7e48tTmRRV6LcSRRh1SFHutmvMBWVQ3UoSNonT26gHBaPezbTKqhwPaeWQxAi9ctesnkbQh4bC6R1F8oMS5HBL",
  "key21": "2C68voyBgQnF5g72DquFpgBSGcMhCHooJ1yUTnNiBEAtc9qX9EFTJgrX7HzMGdhWDwZoXLL79LFyMbebXKNH3WAr",
  "key22": "5XzCuAGkmfwaJY4KDvfvqZKF5yXhLnqAf3ZS7SLn6tE8XHggA9tCEDUNLafkeWE2JD7pqZhx9zQqmZSKsYQdmE6V",
  "key23": "47gcKV5dquhZDDouaU79BZbuR6gUo5JAweRKLS7EBNfWFXn1hD89XCdJzoDkUXaszFJBWNEfkjZTtwDaHNWopxkg",
  "key24": "5ReQaY7djwRjv985MJiTQBF7CsBWnEnfftjCqbY4WdmYZSM4Q3ezrukDK98G69ahyNRiH6AUze2cTvb1kGrbAKxk",
  "key25": "5HHzCCsh6RnidexZb7k5YipZy2M8MdGJasJTiemuDv3FkwEar7Cfba3GXcsXm2FuMDxKfVL3SmhUq9sFPhDVwZCe",
  "key26": "2PGGC215CbCc4FZiGnR1VBhPTsUppsULoZzYDdPvy1YDh9RqGsRc9pBbjHnKvXXncXukehYmwuWbTGfZ8yoD8Ztq"
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
