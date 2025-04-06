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
    "5cQNwnFx7D23bJarjH6yBN2Kp4fFAL3X4i5oqrhj6D9Cr7EKkstRqMtQbRZYqXQ5NpxZCrUFEdNUGcvksF4mgAVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QUnebgL7o5hNe5e7oUuQpHGAZpCfPeeJKYcABdpSgZ6bN3zA6tU29U1h2DugA4vhiQfVWpSMqzbJU8HUse4WTs",
  "key1": "4ZLaSS1D7XpCecbeBaTp8GwYQLJA8e3n1AamRRBLgafesBt44KqfeMb1hhBzMTRprDcxwyi2wNvDh24gUhtudo47",
  "key2": "5wsDSzoAhBudJwK3895ksG4CprnAN7Tihk5W5yXHG733YYgjjpNXLkTdRjctine6E1kpuPQmQgf8fL8LP5TSep2h",
  "key3": "4C3PJukMYZDRdajb1jsDrv2fAYQKXm5ohbdqcBUgoSwhXb9XYSWc7oQwZavGmZp9PyvQL9chKpvL1LGbVU7W18gu",
  "key4": "5nGawYUTHdBZyecgQ5eoPEVJq6vkesc69ocdGKFS45gGUk4mEeLvSdhoPtzivrdGp9zmcgutceunjFoBrx9f1T2E",
  "key5": "3hJnyFLyEEb5UKU93b8wFqQzJU4ojFStVdpzzUgw1pujf1BwFW6eu2Uvey21cG2m4Tv9PWsTbMXNFmknsTj1TqHv",
  "key6": "5Er1yBhtHLU5AgGcNxYRZGsJnmcFNZBaHPPR2Uw9PYRQWSCAabQFVy8jd5EpSLcu5YwrySYRtLEA4kDbcmUEvf8Q",
  "key7": "3o9u5JySXWAoLPFFR3xmXiSwyCprZdWr9ST6AMgFbVPnin7fnu8gg5s4Eb64HVFnniyZG9YD2RNhSW97vTTpNXCb",
  "key8": "5s8iH9QGA9MkszXk2MqYU7U4h6rVig2wUhmuKfDkmuyVyrNqs8hdLAeiUNdXqbXxCG8KhLawj8VTBnfw3LpWAEhS",
  "key9": "zbs9AAJZarGoAcN1ouCGZmbz8tWA52UVLrgi7XiFgkNGUAHsmLPDDG1Tkk34cXJi4rAt14QsHxBXxM6RokieQFm",
  "key10": "3sSz3ZQGsoHSyS77AVr1ZxaCPvvz7bhTkWvFAVxjvBwcBMg2Lbjoe4DhmCUFJ6Kg7qWvJVfcpkMTc1vh9hge8Crp",
  "key11": "5yDeUTAbafMK9p2CudtdDZq684Ye5j1WQmTJpjkQpBLVY89MYwZ5XP86s1xhyLHKKvHCbQW3rce1kZCiqWsHsy2T",
  "key12": "29kVvvG5UYLGVmwY36aw23sYsqW9vnHCB3jkfoURjT5JwK9ep1byaNZbXbGQpeYh4S5EyvVkWFsADR3zKyndCrew",
  "key13": "Y4P8Rcd56JuxACQhzhv86ZZeLXDUexdd8eAzxiEuZfPohtbJ3XTbVoBnKwtK3xSpjvhPjbVruPkpA9QFFEE76FR",
  "key14": "3hS3esfY8GrtdtqW1ri21ryg5Bqi3GFWCUHnCRcnSWtWMDJChdg1ms31aiVP23qiwi9yQJseXKRzefU7MfCV1FM2",
  "key15": "2JR1HnZN4gLi2T95sPRXtqGui2Y99BL5MsL2XZaK4VueN6Kn9xXFyTqS1y7zKBHninFdXBRue95EwzdyC2AA2WpP",
  "key16": "w6aevhPP778eLdsonFnjdTuzSpH4XRekXq9KggW8YhnfTFw1C18n4kHd57fWjUwy85jsmewPhUHFDUiszNLnTUa",
  "key17": "FDvJNr614wAidiAb9uwU98JndtbB5nPxhgnbPKdHWxzmHEeLaawuhzDAJ44MbGWt6zNtAaSAgknCPaNCfh2KhLE",
  "key18": "3qjKmow4T7Ndh3gD5Lt1d75CDsxGmzYkdToqr6Kfeo3Fq8DKSocm3FJZmjPHSrE1w7VecteDErdv6eZCaULRMbar",
  "key19": "4JwRq84Dg1J6jeDWtqMGYM2ptUdpAWivo5GZrpp6HuQy1QkUp99NpFyVXhYUv7bizPUcts3qSNULu2XHWfh9EEK",
  "key20": "4wTGHhY2gBL179oRQYwahUw5NL8fi9tuLweFmX7xCYnYNrjruNzRSpKceJ6T9C1WLSsB1Vsg1AysKBkxuxohEEaF",
  "key21": "56apVNdjzgbypk18p69G23CCvsrV6ouSz8AeU8P1wB9FW9RHv6jCT4sPQTmZfqdjEpXCuCsmdk5iJCPxbS6cZ1g2",
  "key22": "EFduPRRZVKc8Erukgarji4WdtswPvJPF79YVSgTFDRoWNrJjsuVetDcNPF8G1UnNzJgAnTSceDT4nNyes13ZL1N",
  "key23": "5qbaEgLGczo6YFZCqc7pJmkk4kutFW3Y7U2zhSs4b3YR1VCbTm4TrVPwao75Eomx3W3c3KYrwZpW5aYVqhyj3cUf",
  "key24": "4iQMm72Qqzfb4PgR11YNQBYEroXdbhHCS67tBdFxCwUHKp1fXKL7gyHqyTY4dxGXSHp7oKHxWSLgeGi1LC92TVNH",
  "key25": "2vj9NvDR2PApsoE1nhDvtM6q4QSwkxvAfGa2Awnf8vsZsQMxgAzNJmdxMrLbvmbsEQ4Zv1iZgYKcA45R8xi9eb6H",
  "key26": "5SHy7PzLd4ToiTDhAGETEg7EtJx1ViwvxqqZBgocKpiqhAQgwCXL2uRVPKntKUhUwZhwNmH2SnfVkuKV3xgt3CpN",
  "key27": "3tyKbho39Xas3qHg4sNcdoBdgreZZfAazVhRZfj6LhQFwVjDz6oD7WCeCpY4SfKqPNxNewuBgS6bhyaaUUpyanuw",
  "key28": "2nAWoZCR3YSrY9ZxGAkM5w9ayHQFpjLQAXXmNDmDk73HN43qNYXWqwTfW6f3Lcs3618mHnvZ4RT2RkcJrJCXXChg",
  "key29": "t6BWgGCCXSHbGGekMGBpGBQ2LBvtKVCZTyQr4F3193BKromJmrNpW7rAkxcoKp37J7S9F5c9xhP6FZ9FfZuRhug",
  "key30": "2ZHrKZK8yLe65dpKZUEoSXmmMbjzcGSvbiLnk9Wcb3ZpUYpbcqQyv5QcYPPH1WJxnpEQf2P5KJnUUaQ7hZTJvTHE",
  "key31": "42c19T3wpcd7tfy9VstZhVGTNwtD6s6kFDp8p6UxXzm3Vj96szuoraXaX9kCFjUSRdCNZaN8mCypGf5KtpHfSM4a",
  "key32": "5jZfaHAc2yJfjMPvLJ9qSeSVtN1TZLeMLqNjRxKWQtAfFK6enGgZdc9SfRsF28J2inTSmnK3Uc7NwU3HrFSCZcYo",
  "key33": "5fENHYTzRx2mnery16UhrzrudEFBxUbtwWT9AtYyVTT8HwtEFfDXG58LSAKKRWPXZQYBGKaKjhUZbMWo1YnvpKsm",
  "key34": "37kVR5buNxPeUoxjw2tEeWoVQgHBJewXujVZsN9ZkVSiEk5RGt7HYjvpLEuUnSRb6jw91bEYZjeZYUy3NUupzkTz",
  "key35": "2sjFnx1ykx2H2wangNJPu96FYHFnRSQvGbtBNsL369LG2oEdXraN6Uang44YzqET7ExkyHDhsNJrTekFTeRcLERX",
  "key36": "5MuRm4KrW2EfLCiZMUbNbNpwYjXBtVVDEJvGwByN89KdQkecoiC8iA5JZrQD597VFVHR2XF7z5xyDcYZUDz6howG",
  "key37": "4wV7irXHCHzDdJRjaKZjeVTGntHCV83nn7z7SUAK2f23KsCAPdrHvTuXUhSNEDf2WdZRJUx5MTZFAZtdYPM2tC7d",
  "key38": "5gEgKQGjVcm45yFCALx3y2sU6ZNUxPZZq9S3AMtmwgpC4E8FghSTQ7eoefXa9CRpASG8veQB6iG6vmwbtVQaSUdw"
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
