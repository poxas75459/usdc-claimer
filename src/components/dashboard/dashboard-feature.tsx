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
    "3dZSae3fcGfeGWZEd8JzgUegVsRYVynR9ChvxsxwJSikCXk8HDyKr4rVFTgibR1nxHdAGNh1qc7Az6evYitQWw8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGQJK5o6dnzsYxyZkqYHhF8dWVWW1suX9Fv4tNfMgHcGZPN9y4c5K2MByQCvD2AoRrtgkoNQ1up7ANRGx6rR2fk",
  "key1": "zFbi8Mfs7FxYmo3okLB5vCxZdXtJ6g3dfnv3vhTghEBpprX4kvyhtiP1CPzQnmNSAzwJ2N1CfwnfP9zNLJAcygG",
  "key2": "45gRzM54eMFNmgkA9FukuvyajAUF9CbqWiXE4H1t1PUBoW2XZgEX5izmKYMAgnhSEzcU1wKtng9n6vJbQz7igY4a",
  "key3": "3UEW2Qj8dbnz1gpsGEAgPh6rwz4KUgpVCzRCXWwq1xfY3kBNWx3xoAkGLG24piGperjnf4MX7vjy1qR62iyxNHBo",
  "key4": "5RgV7FsQ9CyJLoQyswNbmbdSdbttAHwcds1dNa1zLFSrQtj6xiVfiW4muEAeF6mRJBhEeZeDm9A8qgo7pz1xGgy5",
  "key5": "44haSv1Gz7uE1LFdWciU2W6Cqg3s8j51M2Kei4aVU2AByqZSGHA4MsDvVHviv2LoUXDma8EJ3rhigcgS623ebABX",
  "key6": "4BhWfjvbLxpkbcE8U62mEwKW2cKcdsEQ6ymQAYaQf3FpNR6ScLcd5Hv3J6kAsF8DRgqqDwXaigsBhcay5NrDYWbe",
  "key7": "3XRMBXtnr3vTANo4dQQqTQw15KWwRyPpYVRcj9q4h3c4s4MoD4AT7YPpnqqvhPsh2Q9mb2kp9CZpAjUQwYqYGVpp",
  "key8": "25rpAb3vLejRTyYjXL7rMrYqGs9tr73oK6gvRNdJny4v7ZS9MdXLfk2rRvfhrpmbf6yjQDznLhrgbKdWamyUTjMX",
  "key9": "3xj9c84Ht4vvbWLbpdkPShbYCkqC8c3GBesJLb8YVqD1xBqxLZYJLTvDKS7R2UGGoZWVZAmSt1dEqKTGyBAyZoA8",
  "key10": "gWQR8e6Upyx97KZ94KWhPR8ZhZFSNF3gcTMijRbKrWZHzF4viNZ6ygU7RNteDtgQSAjbHvJCtdE5ooL4ssszmZ7",
  "key11": "5qENdp1NCii9AxoE5nMffX2EJFxoMCPZDvkaTTbnah3WrTrhaZgfsdQq5dTBfK7nCfSNHDEheb7sPfxKJ2UkP5ad",
  "key12": "t6zeHr7bySRWG6b1LxCF7jCUActbEV54XixpgDnMAC2C48CJaiv766Zsgg3LrK4g9UZS6iHa577edVsmbcGjEtn",
  "key13": "5aTvsqykaa6tVWSpvni2xEyPaVm7jEUgSq7nGMoEbm68jGgZ9Pz1KLkvqThisTjbbohMRrazpCqzCVHmJeHbXW7w",
  "key14": "2kqQ4MCv5AoDpRSXhyUD6oAifaYBCFuCo68EmWjw4tWAXbwrDRDdqgdWjKVRCBXc7H7SYgUdPiQBJ5pkb8B4CcGD",
  "key15": "4dHowUAJMsXRYsqeCBmKWoANpDvtwCyZXZX9qoBLUGkp9R9befk7tQQ9KgaRwoqHucFAifCiNpYfvS5vC4mQPczG",
  "key16": "2hMmH7iJ2vyNQirw4D1ojrVJds31Ss5MevpiU3UtLkxCCbr1DzBsR6LeQFtEfqBsZQFVwvnpUWyCuhAVYZvV681v",
  "key17": "4kuyvLx7Dw4SqUMyvUv4zRNE4YJCwXg3B8nfgPXjo7mYTC521sYbEdk9wpyzKgmmVTMy39kvhbTtmtDkjGkpk4Dv",
  "key18": "2AMCXzmf7G433aFJHgfXn4GC2voLjdzVLJxswqyHQDewfVNNTiJtRctRftyK2qcggsbgwKB9tLmev4yShRcyWZU3",
  "key19": "3FQZKdswToqwyXLZ2HcwRGgDKcp5xPjpHgq9iXPwP4VcE3pMrbiNTm2mhK1weSeEvaEbx2ax2bh4WHVAqDh8mCzV",
  "key20": "5hBHcqaHmgJvxP2RXtvxu6KeCLmozBSHPWsDR522CcCAACBPaRMmGQQZ1cRdwYzpgUC99pU4MuKpeaRdKDy54RBL",
  "key21": "4EUb26C8SucekmpCNZAoqAEm76K8xqpo7zgzoTZrMUmQNSG4DFyfyXsn4ypdxSuiXGtyPuZrAgAGnJrLEYfJBLt8",
  "key22": "3uBKmMbm7Vd9YLWnu88LL53g9PZBV79niBTMUCME4VK252Yjy8KA6zXo8p99CBHK3oRnkSomETNEqKeh68WLovGX",
  "key23": "33FVaQiMyK183dCJtSDUGa2yUjUj79sYT1zBEQkDxbiTc5oSLaDGSAvG5pErmK7WVnViKmKMELx3SDC1ZGkuteeC",
  "key24": "47fsPwbiVbTX3nZvpWZmA1WwgppGf9esNqvPXC9LBhu2ft4kEBPga4rnyVY6Db2A2UNmSAx22VWYFRm5xWL8q9bJ",
  "key25": "2RecQaJ8Gxuo7C46FL6NAj3rAHReNm327PirqDdJzATSrxVt1xjymzm8sPDJedS5xkKvshH8Javzv3Bj3NG9cceL",
  "key26": "4NHXGNDzvkSTzjCZvfnBRsnnFSbWU48PRFBDQYDLRiD1JzXVfqcZDcEeKnhDAreozt1WhqFhpshvWoSx4swjF2KK"
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
