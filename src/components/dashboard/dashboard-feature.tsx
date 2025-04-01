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
    "2in8PNG49iRH1AScyrmZJzwKZdCgvYe8VNFpDni6XPBTUUPNiZqkfGbM1wA1Dw5kkq2z35wS17AXbsfbAr7TXiyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HxRHkRAAsDjNuVSfrEJ7AzE59ikJtCGb4JdSYgZDbgcn4UHNa31JHHsFfusHooMxgTwnB1LWzNJBcu2egxfCoYQ",
  "key1": "5s1jJgbKUEiizoJmxnMAQLGpnrm8Q3nVKSxRQ9xg3dyrYaDmfryQ3JnDeLwqzxZ52iaTnmt4hVGRKDb16nsDLn78",
  "key2": "62PEcmGiWEhCfMM9V8tuizYRJfRpK2XeBviA975f7LJSVYLfX3qPXh9CqSM8DBhaS6CYnbdX4wDfbjutH3gkJ2Nf",
  "key3": "3HX9gs2o6WeN1cW4u3ZdudnDDotGd1kapysvJZ6xUXHs2QZJAUJ1xCh5kMTdJcnH4pPZCP2gLjwmYdg1RXR9YgY1",
  "key4": "2gxm7Z1SMKPe8YWaSeyTZvzmd6agHRPRuJuXC2u8ZwEvWnHYNfFJT7TXDwLfMtkkuLiSspXiJiorx6kXNqsgECD2",
  "key5": "2bNBGYz7T1WwdBSe4BMETK9vXXkLXAFAp6GyG4sGFpNZgwuJigyAjXCqC6tcpB4FLpdQ4obTzuY3QQhud7vMQpq3",
  "key6": "Vi9rJVUBH1NcjkpwGSmQ9PEc65AoiLczpCETUHf4udE9bVFL7a5TEbYkxf9P4YGqjsDUVjE6HsT3AoYMVfFZFMj",
  "key7": "4ZZJDSQoudyHhuCYsaNfy7NJH3po3vBJN9MLf2raLvUDzqcchfX6SAdzn2FkxfrbVZW147Q32ppda5ojBg2mnPBi",
  "key8": "3TKYAtxK2wnXTnckHaToPC2RSuTmR18Pev9VRrKJxhwWfJ98HEZ3LD3bMx9ANtqqjSPZPchQTyq4RNsmEvEJ8bF8",
  "key9": "4ZUCT3A87aRRBV256Vo6Dv5KjpJ3kQBmkJjWZtR65XYqpCR56ygC5o8kSB9zaenex9sXutPcnUWb3ZMESKo6f1o2",
  "key10": "2PNAX7E9pJ8WHqarxxADm37D4AnE43DY4SJuJpiKFZLCHQ8HGKxMwUPxhkKnjWQoQ9SxU1TrUPd85mmb2M4Qpsh5",
  "key11": "4Q3fP1c55JNmYgmKo2j8HxynfGSKhcGntfjJFaEPBbHkei5w4i5vjE6peb64RcQjzMn2AXwJaVZYuZhahaGm7EJH",
  "key12": "23C6zFffisD8dnmYwmpm5qGXdtrReY1ZFzaCqC3kyZHncFQMJasoDAfyhMYgrJQoNJpoXsAkfeUTkpRe76CRNCAk",
  "key13": "3fDbWUdAw4BBkRV8F7vy2bendPVmX4Vcnsyz8MFsgJjhT7iZK57ERvYp8RuoMXr1VZC16T1cGo8Ee14GhDT2GHK4",
  "key14": "4gmK8jqr4yegatb796yf1jxGdjQfUeunPychGunUd7TBr9vkK1afWUZnWG2vzQUDTDVFnJM4aa1DR8HYhVcnjJTS",
  "key15": "69hrovV4XeNfDpRbTpGjVEnP7uTPAuhHYNhEuFVGHNW2yK7MuhhwsY2ortmoJ6iQts6czbtPWSn22JDG5oTPLbZ",
  "key16": "2ADhDark5FRVTPpPNL9QESfCHMbUf6dXuYv21SETSJNbbAVXoFGnR1MLGKjgvc9D5BvhnTb116qx3zJ7azpvppwP",
  "key17": "495TfjFRBqgsLHCFspSpE9gRJ6t5TavhBY7WihQjscB8A8hAiQwqDK1QroW9M1kXyQMhYFX37udrzqyXbXYNSLtn",
  "key18": "NgSCwoigKrBVqV5FhPWeNzTNuK31CMsJtwpZpd6UVgHLiYTjUxEYLHpPUW2YL9EM82mXckVcJZF2K2sZzyqGqT2",
  "key19": "6477MmzPjPFN1Fkoi2jJrCcZZJ64HL2QmdXcqjbj29QXCSwKX9iQ9p9qsisyqivvHuic3nk6H6UaUxc8P8R3iHCW",
  "key20": "5gi7a4YoLxgfoEBYL7FTYreXkZs2vMS2RQkrytK1CgctBkY3qD4AyRJ22nWPx1LKn5ABUsEahQvjUwYX1YWonhjG",
  "key21": "w5FrpRnWSHsGT3Xu49yLjYgcygeGmshD3CQTB8Uzo9dUiJjDXAfajvppkzxiHH5iGUwuzwcE8VtSWfFh4pDftBc",
  "key22": "63uavfXumpMARy7LfqXUp59UjXHy6sXAKbcdcSZ7faGUe8dcfai1GES5Vd6soEoC1StXxC1oeimCUthx94o4Z83T",
  "key23": "3vs63JCP2xRKMPtYRfcsQ3R1EiDANxh33HXDb46ULmMiC8jiKDNx8okBVi1VLDobdRTopfyeDkVoyZY2R62xP7vo",
  "key24": "4MsZU9sSCvjdgYfL5psjaLZkHjK9rvPTXt48oJbLvHF4d5fp4mYMSBupKT6JKq9iziz1LtGGrpDWtHxZk2g13xUm",
  "key25": "4CRRw7M1xwBjq9ZWYQJbXQss8jyCmmtXmUm2pQHbEvicWK6HxsoChiYiY1Ao8PvhwMVKmyi8vAyo2LaW7j6pwVoG",
  "key26": "27XxMr4uu5QjDkmkhPNBMP5Tr339fNB2hq7ekNwtuEAaGLUSqTbvmct7yQFYCDa5VoTXfgxMoZsQ5vcuJDH1WaSh",
  "key27": "5FnggYbTgnZeQwg6AdZAcPF7TPzYdSZu6kPb26ZeXPtVYjDBQueZncUPJZ93DjjkjqwGshKouJnHfgmP3nUBtMyk"
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
