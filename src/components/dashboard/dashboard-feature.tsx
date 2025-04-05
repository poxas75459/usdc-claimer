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
    "5NfbhJiQnse5Q8RAmv9UqtDAqUzf5E6HB39T5dhKeKUgbGin97CZ1Nnjvf5Dh7LGrAzGCpoPchJFiFBuU2WqDgzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u88KTFZfyeizJwc5t9BZS6azpfMQ2M5EZ6BE24e3NH4zfMXquN1pkYQr5trPBbZUc4wptssguUrdBzGnWUPLjkp",
  "key1": "4xCN3KiPZJ79vyJhBJShN6LNQ1FvgzFaZPjyzk9sebuEoNjv8HnKg5D317LgyKVu8uQhx6KnAhDdFs3STioNona8",
  "key2": "4FLkLHhU1QJ7ASB2fWghpBiTW5fT8jzFFq63k8NAMH88gpsc4bfoQMZwMdhgdPrpdcyfspd2YngzZfn5o4DCGYvk",
  "key3": "5yTUcwkUdXCH1yCp8fFuuohMjuedt8povhiNsX4yn96FzA2WWYtGBm3uWgG1MSTRvoC2UorUo4XmqPcs6ryFbzeS",
  "key4": "2uUa5NDvbHhPdky5B8q58sBdE59ACJouju3uCxEGN7tZxYcNfzvLkcVQBvdxQq8S5x3zXkcGmXcvUR6GXBHSXc3J",
  "key5": "P5P7Mmt7S4fmB6hnowFzWaC8G4xtXmMxmwydA9e5nH1DsKXMRC84Mm5GFFFocRKBC1nysLPpWCugkvjgWcsRD6t",
  "key6": "3vZ41MqDwbMhnsRqqCR5573GtQdxMxsR1fswcNJKTuHJD5Hkff5qx3Bhqm7YqbxW4jQDyg89LwG42wm86j91jZkq",
  "key7": "nE4sMFx7j7NZ4vbbP7RD2euYXg79tCyCkRdRcUawmxBQSRbk6Rq1Yxh2YvD8NeXnVykTVkqB87doq6z9hZP1wAw",
  "key8": "425N9yER9EJWp5UujmoZxH1Esf3Wq7V1PqPVtLWvcPjdkMo7RgwuQVmtqV6feEpGGfz65JtV34U7KkSXUDB19SQS",
  "key9": "2ojRzRgR1eE7FUhhpCcLRN9YaV7ejmRqKwWLRbYVa8ACx9rZYgJqpdmCXx8tTY1siS5D4oSLAk46gcYutNSkTtzQ",
  "key10": "9PLuRgCXnUtyBBg3z8BVKUcrJZXkpxyQfT3RyAyA1gq7fa76gVQDAsxQGMQpQCSmXX9orvsvaDbcLMZHm8CfBZG",
  "key11": "3tQD3GjeqBso8WDQJXi7HS3SvyeAnjRiNu6w2JP7tRAcR9pwzHnU58YbD6rWxhQxWJB18PpNHypyocePdVEcWNy",
  "key12": "4QJ4LCWBv4UcfCpqQufsbqwdFa83EetnLS7kBFzM8sZmPWCjkMUzNj3ocp33NS4a595tK9Jf3LXTGUtcu5k6SAJC",
  "key13": "4x6RZ5E514RSvHLbe2pPNvw77T5w38FYt1tenE5vVfNK4yGT52bZJJhJEY36ZJkqXoEfdyrfLtqSNEZy37wSYZ8e",
  "key14": "2j8ZcNBfL2jL12swPqearShBHpDZMzsnEg55B3xc5JwbUjZcX1xVouqvX9DmpN9pXfKK7LzqxLpLA5DjjCQkszsz",
  "key15": "45v7p994sEPbgCoS5ZYadPMxeb3W7bFZbw1kcfFAaowdtEQtD53kZX9KStw93Voj5c4eh62asHm9E8Vgi9R8173Y",
  "key16": "53i3gEfuag1Tn2dD3cBm4DKbiiZfPMR6dmuvv9cQq8VkNfhWuzE3qyh9Uz8ewFD5zNwQsKT1MDJnimE4Ex741cw2",
  "key17": "5zTp31wKZdgizC4NsAi4TUZZfhTddxK47vnkxX3U8FF651CPCDkLv5L7Tnd7ahFZwYChRRDF3RU5xfXpG2KTAFKs",
  "key18": "Q8HYhLes4YUZ58fnidZFrxRzQc3PyNieVEDnFvVawitjobDbJCezTAKAnCzYdjd4NdABiPNjUucNVFK4meQsSrw",
  "key19": "5Yn25ZP4Vhiof2Tn4vQubMAFDbhmkwnFapb9SMKiKHSrRGPCaQs97nkXzMW7ZbsfJzTZTYCWxa8nGmc2tLtoL5XC",
  "key20": "26Yqi5tADMWgsjRkWa5JGte117TgMtecSHy5ro2xR5dcpfyTwFfciixgVbmSKaCMcYnDKdY7MA8G4BGttEgBhcaT",
  "key21": "4v1yTRYEqm9AHF6C9M4PttaSYtpmw75PgsrUyfbVuTfLCWwNGVGCNBLq8xamfo2gYvbmQCBsEQ6LVfZP7zGRv1GQ",
  "key22": "5yia8W93ZJG1VEAGQQrp54z6sSaQcRoTToDC2qk8iDoD1ULTYRX8JyJoGJA23bChUFs5rjRmzyNrunyQcDQGx6dt",
  "key23": "4d6PSwinfrBff9p4TWufj4ZTtMiDc7wQhYec25gkfbH5Ue4h2oTJTvot7KuJru6DmbMb1TNpkwpFj6ukNDnhidm8",
  "key24": "5ZRVBhnZK7MxxCV7dc39Nr6BC9N4o6k3TrMZ3PMVePL8DuAtokMAhihGH5uR7pkxPsRkJuskrqskapDpi8ST3cJj",
  "key25": "5VSP3ayQjUHybgnVtf7WzYyy5NR7YAUKP2ifkmbrTpECK8N2kQAzGVrSr7E4jk7XhJSDNwXG7uN5tNUZhyH2cwUK",
  "key26": "54i7dQA5NEQ7UxUdy3whXiSRuAWNpNfkd535t3DATJuP4EtUg4kgMB4dHyf7M76Md59bVhPWj2D3sFRZtBGndsUx",
  "key27": "Ep3bE4Vd65aXtFATWooBaWU2htofFfo97nUCVo4iwyTNc4T7W2oL3tF9BTz5oYxdKsr2WWW9iJ4i8nwRpkr7Bd6",
  "key28": "5xuvHKiLG7Piy9VxfC6hmopUJ5xKaq7vo5ySTDtWjvQYGbfDo2Z9eKkeLmrwmBeHV9QYj8V7Qr97ED9V6A5mm6WC",
  "key29": "56roL2EyVQjD9WkgwCTW3knUrBc25RGnaF7oQjRqH3ZdjrSefAUoKKuuc6yN61wTUuWnaCnjtLXUoVkQZz5thAW1",
  "key30": "X5AqPTBCk7MsUBJkGNDcUkwQyxfdumWZ6HtwNTYL9UZ18FcTTMupMSHvFXJToz2nNNP7duQ2UuQcPDeh8uQC8Vq",
  "key31": "b5V4K4x2MCxiEBTsuHzYXgrcDsMtqnJND2fcZksv4VarQjMuX5u9aA6Q3pEHxVMAULpL62zF5BnS8jpbjFkAkkd",
  "key32": "4Vg4n5rUjQ664iJ1cmP2FhzLoSmnzcHaQiXJgTGBprnrTimZR6udVSEfF4D7hNHgdX18yec35GQATuDBkUw7gpjB",
  "key33": "2BvyQwzNQ8e7zkFkJeeuG4xitjUwArQ2QwX7njxo1v5KGk28UJ7ceGWJj83d8RLHF87NTAfih97yaL7FMtU9pFff",
  "key34": "3SgrYoHEAkHUCwezHcfYPy7NijUAPe1RpkBfQN677rgck97KeEiV66WW55AqRc3RF4BjVGr524GcwPjpQ4pFwThj"
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
