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
    "5j5ZcadneiuMNuogvHUPVhwkz8YMSUx8Ns1woQhvix3hXjYJLRAnpQKfiXGkpmHpRVR6mMRkcrwk42RHGDUCLc3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w5V5eN7JmdM4sLs66LbVEHiCYjvoUHy6Qey6PsTuQNexY2J5rVz5GjG2CgmbcAjKamiBZK8aStjKxmuEYGtHShU",
  "key1": "5WGyHRg2ShtSbM9Gb8P63LnA3zdVaHy6UZLC7o2LvikgjYT4nzhZfbcUuMGnvWwTPrZxfcLUWJxzWPH2ymVHk7LU",
  "key2": "2azvBhQPPCyfdthYK5ZA5QBHSvgvqn68jdkp6YespdZXuP9794NCzngk6W1BAg6svAbo1GVRXxHiTDT1nWsDpxeN",
  "key3": "62AhsaKxiHxDzeev8yyBn277r63bmRe5Y6ineoGW3rcjnxXWgmHN8sRwnDqAqsPqAzP9LnFMMqNXwDKTafG6vnYD",
  "key4": "S8YkUb76oEvTSv8FSBUumoQTiSpcWwkNYnpJSKxgePmrQv1EPQrBPG8bBFD49o66qHQMMmJMygubpigpmCRgJAH",
  "key5": "5uxTZ7VqTmP71BqBvdw8jEhV7K1PbTXJmQRgsma1EB8vMVUVE3RKyEZ5R7QJe4wq9T6QyYiNoEcg1rzKsoVRD8Au",
  "key6": "52yjFQD6tKbRQ4MCLdfamJd9nzGH9JBAkS9UffNMAF5mpT4ssiQGAtr2gBKNzyeuLCTwYVgd9ejouuJCfDidD2kk",
  "key7": "5CbY188n6hHhAzfbBwvGbAcJbXLqFhkaAtnqdQ2NKeMjnRQbukp2MBsBK4D27aidtSytxcGDdpc4S4euV3dubtg6",
  "key8": "4JAtPRWhHomZDdToLF4DzVihioyM8wF4qhoQDRr2kaFjLUf42JUdW5Vp5PCgjtz8MMCQQuZfSW3xrLsTRRv9bMgQ",
  "key9": "4tcx1MKHyDWeHTjgAjUh8CWiy4cJBjnmRBcwGmVoFXJ1V2oMkNsH72FBxDSKmUoDVdqS3rjUaC2XahxfdG9PfS9M",
  "key10": "4vt7KpS3szKLyXxtshEqjtJbMr7GXtnJ9SJz29CFCQjrsAAfV11tT8VLot8dEA8dQRVNwm165dHnAjStTeBpe6sw",
  "key11": "3xx7tA5XkSg3ezyrJLuftLMqg4uZmRg9vWWi3NTvjZHenq4pVWS7t6hXAF4xvyhaZaZdTRgwGvK6ogFjXGABcCjq",
  "key12": "qWB6PdixJDvFwuwvhv2f86Qeywbzx8tt6pWnC1QmFA52K6v6qQuGta8TKbmxX75yKsRAMyA8AKDf49abksNrBtD",
  "key13": "3nq9bH6aWFMc7o4zsurb4sds4dsXoNeykp8iY7kwb6kzQEC6N67g5Td3j4VasMTSYKwHXcbLJHtt5Vz2Eo1nMdF7",
  "key14": "4fiftNQHhSLYDczJLbab1TLdfQAQdkYFk5isJTQNydRHdNbqT72wKUvFQCA6EKoiKuwEjK9UrrqYKzuVTvkX9YnD",
  "key15": "oVDoJ1ZfDqzQk5pCF2NeuwFHYdvzgiBCCn27oc8BNMCMAd45NweQzd2FSxcaMCwmqGnB6NojjUdVtcgXHBmhsmN",
  "key16": "3U1nk8oZmJii5Po2UhqnQdS9ckdodAcZGonN4oDvkwLqFwmCkVdFGaoA7As6GDXVjUTp25tvEouCkDrj211B5eZZ",
  "key17": "JvMrmawzLytH1hvRsKeZf55AYWZjsMWk5zDmM3J3LqhaHjPwp29Et2tFPq8s8VgTHq9er6ZPoXiG2kn3w8bY9JC",
  "key18": "a6EhTxVUpWR8ANPWTs4sgFbmgeyjR1vRE1PFvemRNyW7iiRRD68AxsgcebwjtQV4dgWZYsRviCQU8xRZbd5H7Hi",
  "key19": "2gLBKhsMxshhWrDN6UpsXu2iuRyDsRoGk9otoxZja8CHKKKDynmr79oy479ZqGSEmXY1tpYCpLWt5qzzGQn13TnM",
  "key20": "WkTQLKhLga9hAdWd1UgFa5Bf48j7fHzV8zGsuCZVxgjRTvXHmQZEpbDY6LkKdXfGDUCsPXHXExT9r231nTaGXSF",
  "key21": "4MJyPfMUqugqxuu8TM3Q1gLBReTBYEv1N3ycnfxDoVSRC74BksduyhXyTw96bnTATwQ2iFPHxoMq1j92zYcU5Xie",
  "key22": "4wh47KsjtgJXc231J1MK1rxkKL2grKdm6Bi5SNXvvGZz37Cobox7Z4JEtiVCajMB4NmvLSxNjPXmJZZFiQvmNGig",
  "key23": "AkNmtX9NhUR9hiScNHCtVKe2Ztxr9HUWZuZSfDsvgUW5Tmqier4hPzvnv9nh9QNQPCfRKp3QreToSBXoScBGVwT",
  "key24": "2u8cDRQWC4q94keoGfnvn4b6jbNYXzDxSzKNwS2RUhwfd42HRRwSerAwR8Pcu8uQDqsXj7rwNfAvrSymkb7uoEDt",
  "key25": "1DZ9LEsCUuvmvCsezmM7SSFr8ViFQ9jggTSeUkTuf34jtnnMEHXP2t1pvXKvmG4wM7R52zSoyERnTXrfxBb1e1z",
  "key26": "295cjYwEe6qcPgPoHaQbC2gbTcL12BmyyYFvnvVPKmf5VycNoksbZir983bcqmaRpxpfMDGtaHEBZUjf7Uo6TZmC",
  "key27": "2xNFoDonyFnEfCVr1RwRJc98Xvjf37CTDjhdpUwPwKNCZXDZsMhXW5ynSeghaz9YSKqsVWA4ywdnX9fQffnZ43pG",
  "key28": "2qvpG2QQWodpY2EZWoY9LGcsXe4QBWfk61ATTCxqLmcEXb41RUtsnbMqPRg4LKxMWJ6xa5pWVGwNq6F7Gkut2UzB",
  "key29": "HpMfUdAz1Rm4odjaH724mQoxLW2VwR8EUmiP46TH7KdLhPkTGjk5UEVtK56tYsLCeBrMKqysZ5QZCz6Um4dc9Jf",
  "key30": "4oYYv7miturKG1xMLxYXWMCHkrzKYxLu4ym1YaJUKXnosdxmvqqpp6a4XWMnFKAHBqf79YHArerjtVwqmr9ezid7"
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
