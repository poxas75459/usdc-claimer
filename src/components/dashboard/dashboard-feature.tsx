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
    "3gHDSZ8UobLLLREC7MLymaeK8cr7sAtQwachyRzrbnAVbPxZYtH6J8mouprKUNSbaR8wYAbrwtmPcLX8mzEVkwrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CfDqSMuy91CdCVBenVWFvxn8xK91Q758UYt7dhoE4emCfaUGqWhHgXoDfr6wACdCUyTz9AyxRmgSmXkx8qgdvQG",
  "key1": "4yt4ndRUEkNduDKaJTgnxStTjp3YNAHoiTyMejs2fDRrBzGa5eu9JLNJL1DkjA2mckH1EHcsEvdgcLYHiRMUcjzL",
  "key2": "2VnPd3uvg1VnDTmxuXs3Fpbw5GWWoduT5iirsHNbRCRisxmmycftniprKYQfiJYem181CDBzCbB5YPogpz6Zms47",
  "key3": "4JSXFyjDqKnJnDHUsN6JFPaiykKyPcP76c7CSiC9K5o8iTByDmBsRtbU1bmEXJ2ufdr1iHorEdgoJANZ1gu5ap5x",
  "key4": "4pxYDmGdEusRWMjieHvMU9Gr1sSRFimAL9H2bQDffJuaNUG5pY26FMBko8Da3wu8NVPTBkLxVFVKfd1KCNqzEsnN",
  "key5": "2qAENdZp4qBgbi48zW6oKv7FVeC9AoqcS36dLpWfVWzJ7SYuoeeuJzeLGdf3xyD27WAajQdB6UvevaVp2Y9Wpqjy",
  "key6": "4SJV6Cu3mjQYox2TFRrshWS1P3fHnAqqry36i9XM4oPYnCBW3ViYJzQvAYd8xGk4UGyGgHr11mVvYhFaX4HtSWL2",
  "key7": "5X88Rgiwdm5Wgfdr9S2k1HaQuYW7pjEXNQzDY8qokQNqWrPz5kbDjcq1wxjvRMGDdvgLumzcJmizBZJYXiS6vCRL",
  "key8": "4P8tiRPxoDfmUh6qSvPpZG9hT1hHLPDdhWYya4CyKDx6f4HVD3oA7jPzNuAK5Ycsiw8rT4bgmZUFpdUGHSaSwfdf",
  "key9": "3YZeqYHnG319FNzTNHcRY9Ez7DzWH5Cr1oWBCwywmZFZEEJv5wSh6ASdnbQFxPGepUf1v2nPMxDgwZ6xRzAwXJ2f",
  "key10": "2dbmj8KqoKk4omqsUVmi9YKRXZcVwF9AUjPZ9sT37dYJzgJC7gcaGhdfkJp1vt2PGAaFXsuYGLh8AwVT7ocyh5oF",
  "key11": "5yxMBeu189HVuH4nd9KRnnW2iw8xTUn5wBYJocKgoEvw7VXAzdkkPPkcL1BonTJULq1djSbJ2hYF9JqL4deL5eod",
  "key12": "3hQ458hE5MdCubCG26zMJbRk4AqaR7R12xTtfFGGZBdzxY6ppNh3rZUh1ABao93bde7uCBY7JUBfstTRBtVJHqgv",
  "key13": "5GMZWTzEpgPs4SoxHp6MtsuxQycERYzQCQ4DZjqiP71SKYKpjr9RsCc5sS13vNtuAY8dGH1Vu2ygLqNE3DHehKHe",
  "key14": "4QMg49rhiUcK7mDrdr9CVtYNXMiyaziRZLo9i7ZrPSWYo4SCoGc18VR1UPRLyRVrnxMNuP2GESFtmsaSz92p4LJ7",
  "key15": "52DL7giURaLwfaTs4nMGS8ZnkVc5R3vFULmhUDm2mvoerR4cp8ZucuJ5T8DqurY28tTFRnFJsSL2jsQrK9xGhEh",
  "key16": "3jiBwXjNgW7HTMsas2ptAqFmWSs25aiEZ5RRF7P5dM6mVf1aCgwL49iCaZvZaisyBzZAth4pwZNgZMXqRH7BQFxg",
  "key17": "BT5GZFsiLvb8wLBJbGEnTLdTrPJ9KSnR65GK4Eb2L7k8bohWZgAJ3w4Eewy3mhE9LCxnFaVTxZrU4NwebMzejzQ",
  "key18": "2NqH8d1gbw8hnS6JejBx5TZvdaZmi52fJsmfc1xFMKuSD4xe934qGfwsAe7A1ziHN3dbPhqBLcqE1Jh4eTovy69H",
  "key19": "4onRsickqzrUcRQMfk1YeVCx6RSrHzr4KAYxoVBRx6oxhq2hYTycwqdSTgVEgxPv3eAd6guW7pwhGS1ZhM7DQFLR",
  "key20": "4YtuQPYcVuZkWEw8SJBUCymihu6JkvM55XuSJ8oAvZhSrsa8wMgzsB1JftiyeRcoLuYwD9KurM2ApzLE4FRzPuCZ",
  "key21": "3j1fKMwQgiJWvBSjn6renfxewg1rEgg6EoVFoTVyb7CPr9R2hJBSybNq2ZY1ZkmQ9RquB1qZLnYPX7hhzyGHbott",
  "key22": "3QpA4w5ZypwkJBJZ1tkyYWCnrkAkz1UiVHLhoqKiKciC9vcHbUW9Fb3w7ZnKaifgpifWxKxT5qh6NVNagAnEYY8a",
  "key23": "3CWcZTPaeuAnPP4MrLeLoz9GeUe75GMD9pqYegx7cZRWUPxk63kRKTp6qCPGcXYYkbSFfqSnWmrXEUNjRR1Etei3",
  "key24": "WZCxHo9K9seCAYNASJtvWSDcp1PDTeKLBkCFQptJBmNeSuBTgDn5CT4b9frmokHqRqWUybFaRUs2rQmhWAXbbb2",
  "key25": "aoUfxETYvoLEG5fJartuW5M8u3QVBBwTsZEwq3Cbz4YLV4xSzeNTwMNoBkPdauBgDDLLoWF87mNtWhE1YVJNagg",
  "key26": "3kJf79eEg9sumBh3zQkejGGF23AZuAkduwffrLUFKC864nKohEQ8CC3iAAri1mgXqrgZMH99EG7nrbXKCCQ4g7Hk",
  "key27": "VUowc8mrAJ4kWnaF1hzgYR4qEoc7wkJMG53YEDa7gGzu4wmN7XWgRpyCtor3mZoQtjVwSAMnTLGPwJe1NX7EVex",
  "key28": "22Y89Wqf5jPvuFJBQP1Y7qFEqsoohEpwiJJiYVSVJmETEL5AQpBzyzmV8vpTbgCoMFz3d5BAWCu5GfrtLYCwCJjr",
  "key29": "25AUB7Fto2BVTPyAdSRdwDnW9agyaGLeAwLDbqNEFU5RqCXExzs621JkV6S4YT3E7HmqJcJKoqvRmNqHELCemSmY",
  "key30": "2SVRYiMYq2GPM7v9Z3SXYiyx9z8E4NzsSKQGv7Nt5QQtzkoUxJEhCkM8GRCvfSEyLuksnoZzPwkHnmfjzTfa6iuU"
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
