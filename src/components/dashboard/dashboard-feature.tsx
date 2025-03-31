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
    "zUGG4TsikBzgfm4inrYyrXbHE3QgumucaUsGRj3an1psQ3gWMo9AtccSf4R1pydFa1Q7SuxVabc5KvbRan29baf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dD4cNANGBivKShUdFGPMozLRwcohpMD5RGDxwdqH8tqHRu5yPrHz4kSht7QHGDiAQzVLk2xYj9kbNRUGThi1hCe",
  "key1": "3JwMaEZjGycDAdNfeUjGb39C5gPN6Fut8nTYR7Tdp991zLnnY89jEoVVmSu2jzKcE95cXQGSu7Fqf12NwnPZcABs",
  "key2": "2usPkSwitiRgLdy8quV2WVnYYmVp75CWZauoYu8pynw9gJaALucGXugueo7svC4WvyVRv7F7eg7yPfpj9tG4FqgX",
  "key3": "51EkNEJiRNBJeVkXAFRzzhDZZCAogvF4gKUqtgXnT3KC5s2dK8z4vDYkhWmCuRnSXTvjkrMetVkkZvs3Ak4NhVcd",
  "key4": "2kncdwHGpz9GBct8W51n4HYh7cCiQsA31rZu48wd1LKLx684wbwjfhGGkP4QUHRBniiUiQDyAZbY6HsA8Fq6T96N",
  "key5": "66dkNwZbfWTU6RiAadbaH122ZQ11k6deQhaEJ5E4Ev5tF86jHfhyBNftNLKFPCX7T5CGYwAv5ErPaGxPwMtM3pWJ",
  "key6": "3iaJtamG1UCDwTYU3fsWKx8skoKtd3Z1dKssYAqpuoqshDw71WvxmpjPVdJd3jpSPxBNaQDF1NXRgTWBkHa789zp",
  "key7": "2WBnj1FUNi4imFiWKPv31BtXW7WrjuZ1T9u28RLS86dNKq7D2bAZUxAHkoApqkWBLaMQpo76vjBurwG6KZizZWvc",
  "key8": "Lw19SLTrAeujP5spo5abC6rqGTF5iZ5Cz8ZCxvxaDKXZzRUqbkzWv4HFWAct8yh9bJnSgNbh7FsaPCZzxs8eA4v",
  "key9": "2T3UYcjUHp1j2xq7mdSqthtbnbZtmrYXWLL9ePHifVKj1H7hzH6JrPAG59TdJ2PoMxWX57Kj7k97TJPynd78LutM",
  "key10": "585PoHnGmc62M2cHmdw6YSwhnYZQfrvR4TVgR8nwYBBGAAFPe8wovmcrenEd1Jgj7bBuRZMoZnEra1f2Ctb8NSs5",
  "key11": "5L7o3iAq7JanH6MwpR5jsJWjaNFxuJpTGiz43JsUQTuHvwWZCU8uZef7Vx6jQ2fjsjpRAXdpnfeyvmymPt4iTkVy",
  "key12": "2Re9qFutbNgnEEJPrafsTPNA4qqmuGSaogQsiv5ZKaZrJWS6bgd5J1eTK2ap9XWSfso65jqVpGVxvvoikp5oifS4",
  "key13": "3HAEjqJ3aMFvRY5VZtNVDvM8YMUaKAicyaRervD1G49ARwRcoq9HSfNJdEKuifupPoj9WhhM9WjCyuQqAa91tQSg",
  "key14": "5JEN5Zgw7fDpjWiMa8DLXxafCVG4QYg4AkztbXPeALsxPAnCMz1S8ztvE3EM58L1bB62pS544avrJsZPk36H4Zij",
  "key15": "2UY7NGKidd2zdHr9F7JPvhUVCZbhNoPw97LfEGTHxBjveG1AhtzpDX5AzrGJSModzZs6xYdB2CWngGMeXomiDoMN",
  "key16": "zCsJesb58NtptheYYHGxwA85jZiQ9zwXYfHvgQdNKxqGBvKMa7A9gjWgTPPpNZZKL5iDPeyXjkuQs4c8JPoMe7C",
  "key17": "47jpaFiQwha6nACSr73CYheHtzdZrj67uD7JFYB7fNhSnaxPBvTa3myrPsAdAo4odSCggkVNa7Y4xoQ6PWnEy6je",
  "key18": "5YsnL9D5oZjUmbof4JSV8LLkXkremBH2qxBiUqko4TqfyDy9ThGFdwjfyMejYMF2JD7vvQyE674GhUs5RCy67fJ3",
  "key19": "ZL517WqnEa686iX227kAWPf3wB5P3TxEJhpGehnHmb8YEjbg1g2VZybNu6yJNXmY8oXjJTd3W2PeMqkkSYNG2ti",
  "key20": "5ukGgQJ9NdpCADFVZ2R16cnku6SJqrZFT4kebbVMF9qStvu11LrFJv1JKGEkpKPWPRYJDkhboGySC6QNQUw5e7Ct",
  "key21": "5jp66nUUfud5VzjB1FPfypjzPZzDF7r9Vjy4D1s4usHxE8nN1eSccusDKm3TFssaw2Mtsf9gs8oSGCmcoVw63ZZk",
  "key22": "4DD5q19vhJvHVvqyaFrn4XjtCJpXPhNxm2Un2ecYrvgJqkJ4jpnfpVdHRuBqq5DajtJH7V9cyKbrzDJVH1sNCQKf",
  "key23": "4nFr62qw9jbynEhojoJdzKyvcw4Y1ZbujSA8dZghWps37UNKNmnRdBAPYpEBVvVdzstm3A7Mbeo1rBHjk9c8GpL7",
  "key24": "2jXZhDj3NPjzBHDVUtboCkYykz1j7159FvkASn297DSAmubLDatguyxYakRASDYZHZBAD6cq1AewzMhVZCcFhKBb",
  "key25": "4TbJxaT8AFRTsk5fePg8ip66atVh3rQHHQjVquqpaXB2v6PHn5x8WcFEf7rkvHrm3zUiPjthbKnMj5x6Araq7vit",
  "key26": "3HeC7a5QfWUmvBesL7DfHpvsPxs6pj5t1PRcfd9dE9nKAjDzY9GC2XAZ6m3b9hAK4Vn2bvFMZU8M8QEcoLNgieao",
  "key27": "4dymfXJqnhGyRzgQZFQxghMr1Aj3CTq5VmGrqpEF7xymbqaeprC2mEVp9KazuiJvuXHubX4WCgMbV2bWpb625ZVR",
  "key28": "48mw1jidBVMkQDYKEE6PUwkb3JfHtETxig9ct7tEDtTH22qM5XhD6sgZee61fGWWrDDgJEHprbeityirqJ9gUmwn",
  "key29": "uxvaDT3yiPEosbrxHVrSZXiftKSsUVVnu7HhhXpcNDW9Ri7LPXTjNf9dVHWqkSBQWjxrL53SbkKnkEcbypMQPRP",
  "key30": "2G5CKrtKYtYDrx64r3zv7bake6CBy9XMChf5DQLrSyjquYfAZ3q31b8hhLPrgK8wCFEdgEcAXLGmx2MtYEbUnBz8",
  "key31": "3KNGrs6qVcTJJnQyEtghDhmt92rxwwbiXpbqM7NLZCCcj6TM2GKM9KYgGxDH6CjR1x8WPSfFrWxjoV56o8fqtmam",
  "key32": "2LiQJTpLFdEXtK4SY5msiWmKYA1NSiVHdvH4dh77wDWM9AKchJrjXLaVrqRaaFjca2Sp735Zn85FRSjRH1FN76k6",
  "key33": "4x5MBvayZW5HDTRtrgY56zP2pNok4aLFE98nkD367aHqAHz1r73ivHSgQ8SHrSNtFcSoLWHgqTWK8WycWFRu82Jv",
  "key34": "5EdofVeTGf2vJ3MnK6bTbSXfzf6Ad17ZcngkF9WpJgzQBVqkXfbk6b2SwS2BoAi771EsPAyPqMbTWGYySPJNjZDs",
  "key35": "5Ge5JXQgg3RhUMba6gUzWmtD5AeziagjXt7zn792AQNEUq2ouJPTptqFU8E4LTcEnccqzFXJWWvEgmWZsDt9SyJz",
  "key36": "uGVcTqdw96Ky9wXzPjYT35442bs5J6HJJRjEcVbjq3nesjdWPobYexAJNLmcSFjdokVddoYTVB6rVwoXgfABDvf"
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
