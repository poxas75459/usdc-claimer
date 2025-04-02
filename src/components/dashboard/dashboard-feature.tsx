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
    "22HKp3ufVmnZd2oYGYEhjVxYBkQN658FeLVS3o4dqzivFWx1fG2XMk4SSCwBzMEo6KFqeRJriqv4qceGc2rcUnFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WVR7xVuN7xmRtvo49wjh88cFQZE79SbaW4WwST8Wfr53PC3XVtaRywiGLFE6BA29AYHkvtpZSEcjvTsXoKt38dK",
  "key1": "314XBKu841dMbVZwcoQbPJCwH6UDgsyx3eRXtJNDaVFB6RikLyoRBtubc5aBeugPm5ubaBtMHU3JTWjQDoVG6nJb",
  "key2": "yDUHygdQxDjSi33EgtiPUff76N8VFHZmKMi8JakrVfwvjpXfAgFhTwWt5c4ZA4H54SEDGYbh7Gj9awBmQ2nHuwt",
  "key3": "3SLcNth9Kmj5d4heArmSX9rZj87y1gV42PHGWwrh8PQTXFMV2d4zEVKs4qfDH3LRihkutzdj96Xzwk1bn79VR4Rv",
  "key4": "4VAVJPNx7DcJUE8FHPG29ECR1TdHqUGDiMQE1BGe5UyByhNWkBHyF1REsQ8qGdYx4ekxwB5H84FLLvUCGTgeoWPt",
  "key5": "5tKySTHZZmBJ49vmfH4G2R9XFYtXkkdCq2ybyd2V8CGYVMJF2ysyKQvdmkaVAAFSTfrupYj4gCJwK7sWEQL3SThV",
  "key6": "2mwmbXK7ocFuenpJ7qXp3MUdvH1XYsNsuMq6LxgPmU6hM68GYnj4GuRykuhWGYN83higzVZAM7HMQ1N9umY3LLuE",
  "key7": "3ZAYiL6LiwzUffNB2WtsY1mBFnPsZWwYaWhjzcwcm3EabpLvBhnRHf5wu4UmUMDxKfGAPXrfRdoZUNbvZzuXmhL3",
  "key8": "3bWWQ8Tdkp7bfDbtKtfwazDsfewLc1vNyfavV78CmsUVobS5VoS3d6TACVnHpFueFdD8ST9rN3tLEPDaYEWgC7r1",
  "key9": "2b4p3Z8yBp62PE1ydAtFSt7wguuNoSQZXvjZwx96qy2mJtZXswLwKnqxvdjGHukd8HfPWsSYQxeniodA4GF5vKe6",
  "key10": "251wdf2Y6foYYzRXrypt58Emm7ivxRgjabMUujCdQ13XtvrvcydmGZ6WyxLiGx6PDzZDwbppYpchcBQGhNhLBaNt",
  "key11": "FmmaPoQuzj4RcMWsm2myugFxA1tx4Qr5uG7pjZVNY7xACmknWKyRX6xg1u3jDZZUSCf3LayYgBgid1vSVtGZNwb",
  "key12": "3PLp165j9rXK7gaCeQW7T4PUDaDVZcgGEgcMCn9ymQuno6TddcCCBVhPRwrxZP8Lwi88r6j8DR3okFbaALByLL8w",
  "key13": "3usvGZdRzybqeKW7eMW6Dcg332ER4ZuCoZktDCerqfWDciD5EA19TLYS9dW8HSaxrWaQfMy2TMQV76VYMeoaCU9C",
  "key14": "5B3iQFEFg6GNz2PRmJbXbASFetiiNMThVF78wB1Wnuny7qfojzyJqFsWg6YdRFpAuLkDkmDp3XpeZR1b9QrPYScz",
  "key15": "2F3bDaFF7ujVzA5FdiPeYSbpExKHZxihCy8KDZ3qen6QuUcF1oaYhszF3Wm72DQEM7jCfMYNYZB425KbAR8y2Vbb",
  "key16": "37tVmYYFSaNZDhgqEqdJbuhp2544m3vo2iJHc3jrwW7yzcTvUEcQMvprV9GuzddhfXaMQNQezZ226X6aYpRdDMRA",
  "key17": "5VcTNwgejPHHccr5VpkhM4zGcUCvdHiaw6WXt2jZxar9aDVFPZHFeLHTmLqUQghZRiz7KZRihD8zMVkcZJ9jDXRk",
  "key18": "q7pebjHV41EiBQivEs6hQbwh5DoDVQX65bXSW8CEqSMKCbVC9xim4GZM9CLxbxGdZYt94x8q5LW863XWh7b4m6w",
  "key19": "2X1QVjMFbh13FHRdUrsar9JmpVrWCtzuhRvL5FVCsy4dSVaw3Ns1UdnQJY9D4K1dxFSbevfd7psT6HiW7ETQrQSw",
  "key20": "3V3ZJAVCg9xhqfVt6iGq4DQcP1X3KrqKzXexV5nLBvRFwgjka1yDRV4CiB9YxUNr7kJFKQjicqKPuFtxFZ1WM8Qb",
  "key21": "2b7jYHNZfTqbx3qkKoKam6z3Zyf9jcyetiHmArarFZpcFKYpCfKCh4N2tUszgEv8PScKZPUxoyDQLMbn7uSLMCNe",
  "key22": "2QBVV4tyby86xTcvaQHmWyCNEde2X4SsSdCwuBFeVtMx8Nj4FPuMqrGhFigeubV4a7vSmkgtVKjkVg94mkvsH2ga",
  "key23": "aMkmwiXM5NKiPiGgX171Muc5ZJ9b4fJecKA6acAdt5KamKk8ZY63bsANGs2uPf8zJPeprDQKtDqxBeHHjT5RCDW",
  "key24": "5ymsthrAKn1ztt3M2QcYuD5HXgz9gEmVyGKCT4PRqcoUtZRm9mthgeWhsEaLJJbqawpgrZRhddYke2XinUEQFEEn",
  "key25": "23ffa8r48n1uh63ixGMJiv2d82cvBa3xbY25YGqGKwSExAfB71tM7LFErxbGTfLNot7Fc3G1hL8dwBsbWhB4iPgM",
  "key26": "5Zb6arYkXTpCiZbtc97A5enS3fkSiXHLrwQfhzap13w2WeT7YY4po1w93zq8saNWg6tukVhStCPC85QdnVcVHLox",
  "key27": "2JV1PYLidP2RqtnevPVBovZ64rsSfxRj32uDBWykx4my7MscFL2zQkAcQ6gAcizijRaUF8KDAXiuFTczCJvoN5GJ",
  "key28": "4yRiDEpBmYcVPK2FPFb7Jy62xBdx7njMfD7xRRViWBMBZMMZyzQjsyKrEWA2EFXEWQED6yb9D5XPxt3ETBLtwtZ3",
  "key29": "uXQGF7mhCEMAEXuzEV35gYk99PWKQ7p31XDbq6HE4LDvUkwbJC99EhZiri491wkxMXAv53xMj8jBDGBjCqyBiEm",
  "key30": "zRLcPVPGhDScm5rGFDgJH55PPvpAiED9LAtnQwtZkNR2zpH29Pf4T3KLM32VSxqVEGYe9Y4jXbBzKJBTWu2FM7Q",
  "key31": "5dDxHVcMzjZR8Xgi9ejFJsyPuV4mxRs6GvLzJCtR6fW9PmWwNrRKVsjCCE1CoJNb6aj24N6WbwdctsrFm2HHFJQG",
  "key32": "2gKR4J7NyQHpYdFbFUFJCqucScMmvWddC2SvyjcyyJw7e5dLnqtov7o2Bih5LYzMTN9kkXCoQpkt7B9VG9G23ad1"
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
