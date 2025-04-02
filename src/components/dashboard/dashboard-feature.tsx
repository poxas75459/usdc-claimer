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
    "5t3GvGqbq6wwLwfufqTdET19G86y8gQ6fcDiicReNqm4K7XhV2byQWBF64rhKib6qmbZzSiqZuQcTvHvJEbppfAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHhkoZbgrjYHoyGHK9KW2GR9oEQVro3tFT68yYfpangTGJvMoPVqsLAyzgA8ZktFeHFDDFydb24B68x3ue2bxpj",
  "key1": "UHhMc5tJDcbEaeyLYP9jiiuRbMYxg3MveyRx4ZYz6B1xrDDnyqYtwMBB3biizzJguzG8DKHFzDzR78wDhz7do6f",
  "key2": "4xgTE2JPpReHJqRsBTEg4MFXzU1QAAtRxyRWoDuSDV2mcjodd2B4HPj4BDpw3Z5DtoZKsczvsbDnZB5JZSateC7M",
  "key3": "39kq9iXJG6dhd1w2dt771DAGEG7AxNN51oU4rTFttrDqFAB8kyxsf7dbh9M8cX22gtHBj1T15eQEKGKsxqyDhhU1",
  "key4": "2KTPX26JcohWZFpyLApJi6ZacZQUzFqythttwQ3Q4Zo7ECmhBDwLCXPSiE6VdA2RkQkkn6YNJGFGVZBPHdWGp1ZF",
  "key5": "3S4GeBYeuKZPUHxXsMkBCA3DVSiHMym8qQooft6h5MtGRy3NwCvaVvT8KwmmQCGBxhv1WcatAbbjP6W29zcbq4G2",
  "key6": "3BFhwP9wq6T6HsR1aDRDLsC4UZM1y6CUqypJmShaHXE8jZ189k26BEjTDeRDUveSWbzfmX2pfM9jT95783xDhUp5",
  "key7": "3oKDXXrzbPtWTLpdLqfXKyhPM9JcN7M84BT4LxhB4ErhzoNBg2fLyqcTNP6oMEVgJP4SoLhhd3VzgJxnHmbWLB6n",
  "key8": "3TjG2PwSdA3qe6wJPqJboXpzET14CZvzHbaJQuevAQET4MyLcyNWqsdNrSF1EmL2mfgkXBU8sKFhwYoRdLFyYDcQ",
  "key9": "28ym1VzagcYJuT2b9TnJ69RLjmnFPNmDAJz35GPRForqanm3Rd5TgNmZLkY2oSyGN6sbdAh9SxE8Qn4u2uSN8qnP",
  "key10": "3USPMwwY9yhDWMSoFH8hZcfVe9PzNd4WP73jFbMH3VNq7Zj9MNAwPg3Kh7QB6jmimKED3ghVhFS9ypw2rRvWNCHf",
  "key11": "2FDNe6FdR6RmpQ4JLWridqgoprxhBNxSwJCSBu8rFCVmb9efntqX5F3PY3iqyaPGRWEASCCp624KAZT4u8bY2XKZ",
  "key12": "2bFX6JoDR9hFraKE5RqiQ9FsXUtiHSfkh1ePKASPETzKy97exUJ4RvH4xp4h7V2h7iZXGxrH8xADntTwZMZdEH6V",
  "key13": "3xVniLiMR1VLccDmF1rak8d3c5WoH7Pcsaia8BqNrS8sPeioXY9ZScwi6BDJY6SpBdijwW4uZXYxBKLDQTGk8MZv",
  "key14": "5hv8vbFhHZZfQWCrnWnLGAcYHkG3Pi73weaSj1DMqCPMWKpobFvgqbjYguYQDJGkEnaQwntDj7sntHGxuPKdhXXx",
  "key15": "58PYRaRTU3TW41zCyBSmhz8vWciYq4cAEfhKqD2keoLuvZGYXtxTrjB6W7jwizqH9feCCKoW6PTYLxTBc5ipd5pN",
  "key16": "5D2g2p1QuAME6JjFsLgy2ZncUb97Yv4JnzT6Gkf1J1FFrjQFwGMpDaZqx1XhYFWCVberkdmzxnXbij3Wi2DBtEbx",
  "key17": "5NNz1L8JWYSF3tQJcEk2TBwLjs7PYHYLjSe8yhFPBaDHWpPTQ9RUhqjbStHh5Qd4QBvPzkceDwN9zPo4AmtWqWzb",
  "key18": "2HDfpCworRU4peGjFtTpNnKLz1Z61RwRpwo1WuETaVyCkU2Hd9KodgJGbh9SCNQMDgcGY66RucKC5zmFH73NroiT",
  "key19": "LGExjYWwGtjq3CT58ZacX2fhvGRQ5qxLQ6FZTq4guNrq5uit5GyKUThw6CE26iSs3zmxaHvcm3WFGNX87gaa4em",
  "key20": "562xoBMnb9jdyCGg3PwUS1iPQRth2dpHTTVeipZAwYKziKoFvYP6YjXWBAZCwQJaw5eyuYQfsEybxYaFQtsk3mpu",
  "key21": "oTbdvdcaHcyC6n1qAbCcvjHdesfUKC3xYXUF3cuELphfTtoi1exUC6UpCVDgiW5Z8B3v4BrcJYuiFA2VkDBwukj",
  "key22": "2D1bYB91p61NYYWukoAux5dvxuunPFZJzeG4VEXTwa3hdG7QxsE3hzC6FCj3uUtZ2CAVDT44CqU5mVgujWMuuE2h",
  "key23": "wyFgpuyGLvMjfJP9xX3YivrHFAAjHhTRiex6vrVUm9gKASrs4DSS5t1AtcEmSktNdSabariLH2tLSbV8w2JhXDr",
  "key24": "3izqZpKH9fgY4zLJeML6EZHGsRr7bbHu1FS6rgN7WD5X6guQyJHHb2TAw6q1W7tZzLaRC1xnQ16M9QCL8Ujv4Q2R",
  "key25": "5Bpr3ag2X8okHRFTYsTzuJhMF8R7LGDnRLsV2riBb9gY55quWvHEVexMLAvMTL62ng6zGobNJnGdceDQgjjb8sbJ"
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
