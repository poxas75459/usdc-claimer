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
    "L8HhzoLL4DXLQ27rNQCVH4wCuHAXQ7UZGafaGJ9QuhKAUrFQGvJDbgC1wJFGkg9M3YVHGdza1rSrBeZRta6Vb9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FNLnzbuMiMsnikdedEeXjUrp56ABMfGjc6ZS6kLxwV3GKxeFzCbKLmApFo5FY1SFfjiUWpt4M469jRdxnZ8Rryw",
  "key1": "5WPrzu9R4nSc77cqquJC3V7nwESxbJCypKPEg3JER9LobBkY9aGXcQchDv2rwAZ7Ax368PfAFbhgv8JMhcooGRvv",
  "key2": "2nccuYtmThTXcTcJFEcL5mXiifcq7XmKsiCTaUBnk1hru3hiwYiWWeA2PNevC9CNAbio1R5rtnTEbs9Kaqaapj3S",
  "key3": "5VKXWS2UnvHgG3PWhvcCpH9PKGZKsEVznzLkaYLreRK8SmMx1zekw7mL5bdAjcDaW3n9XLbh2QhKf4HETF7zRSBD",
  "key4": "2DoBBeEp73nWmT5HXLzTm5rPdJ7Nc1fHMoHtC5A6pfHJbGmynmWNTQ7W7y41Bco9JV8GehNDF4tRznnX2hhNZX7j",
  "key5": "4woAGmftxmuocVdAcU9bVpZzUaYP7jYJ56Bse89rYoGH8XGcyD8n1McwaXofUzR9XzjatD1X6GtCYDGQFmVpf9MT",
  "key6": "5NXE9qqgLL7xZS7aHrRpwHJTiRm7oasihm59Q1tf9SZo9u49fgQ4sDBKa9WUQVqyAuhQg2eCBrmc2AykZo7pQTEP",
  "key7": "3jZidNKMDyvNhqo4BiL5EBCAhS8mfs3v6UtE8Cp4cx4n6RhjaBw1VWHuMTt6yDjvxqQ4h8y6mcrfQXEhxTjHwpc6",
  "key8": "5uEWmGcbaZNnP6oo7Z74f5wCpuDQLZiMfCQMZq8ASe6euMfEuQ8odEk1Am4PN5wW364GKqr2XwpoqbvcUTjKDY7j",
  "key9": "2M5kyJkSRZosipNPQsrnU33736QxnG5EqzDodA1LHLk2XoYKgeRC6rZzVTHw8pJpPLFva6iXd5axv8dnSBQftZHj",
  "key10": "5bjc3cr6GFTRStw8HWnYv6xxUJXL4rx1XLtcJVFrzvC5LxAD1xC54gn4bkqny4SBs826grKi1cQJhZBEFr7DiAz4",
  "key11": "5qWpHfy8hmMdgoxRHacFUg9QTkthv7Dmu6PfjbsTNvhDiUUAr8dnqiFvvgJ4ERMUpdaDqdQtWpgUvqhLUMkjYoxq",
  "key12": "57ZstG7EbJbfaCuXyS7pMiN78qPuBKuSGuGEBsnaHa8Dv1eF1KfKwzxvK1BCDCqGynrpfdo6REM9zHu5PtUkzohN",
  "key13": "4R41NNLkfCPjoVyodfymtMkDGUX4P8Rf5Sc4LoFHztqnjLWJJXStZVB4xU38vbcivsi5CCriyXeQkxPiaWKDUahM",
  "key14": "5XDXRJfS1RHngNjTpSSH4opNJYBUXE8WGheDmDGemvY3RaaBG65ouNFVDMTQ246wDqcwuJdetg6L2XEJgboQCpvQ",
  "key15": "3u4oz1F4Ck56HDERQEgGYUWjS8ihE75i4LtDV7JbzBgdTUf753beKFq89TMX6Q7B6qKMnmDxcAiAwrBfqK1PpsX1",
  "key16": "3qTFpCHEcaW3LaShsZ2Fz4LT475qVaumCHyeDfXEmmae86z72FY1TL5KMmhTra2QAVbCJpHB6GpZVSaSkZuNYSMH",
  "key17": "4cKaVBgCiBqNDM49H8YTtXSKcPmc4T8QUHE7JWsQeV99nno3DG9aJVyzrWJtPGm7WssmhdXnoXJzoysSq4hQTJNW",
  "key18": "Cemx1djTmu11tLashTsd5sEaBQ1MyiV3N5z7vyZ1S8EhtchhZu7iPqFuGKHPpZUuaeKLNMLEPNLdB3mHjFPd2Ux",
  "key19": "3BUTo8W8TGqVnJBL48XYUCQ1n1huS26zJrz2QCVn5oBSgr6yLWxAGNE1wgJvV6UPP8LJqoehJsqBErwc5D2BgRKJ",
  "key20": "tFpb1MPSmf2jsj5dbpsdmi93qHr39FcCTzDGaboFDcK65LSxoQqjVYDDuBViUAd3kzYaAFM8nw1h2wk87xEhuVA",
  "key21": "WmepbxTyC68f2QRzyvDEYay1WGfkf4r7g3h23rMFWxztXv2ETuj1e1DeJKMrUQPVcSAitdPPkb2oHm8YDtnAnzZ",
  "key22": "2EtN4stHwzPudCvYuzb9WTwSyNLMZYXUo6v8NkHuDKBLvqy6NmjKqkSR2ZanbxQ5kJ88DLsti46VtCw512YKSzh9",
  "key23": "3oMCRTsNjJFW95L6LAKqsxMKH2QBUy6UbV7FJyUAtvfgmipwXe3ZGP21gNFpup2qjRBtAwLPZjk1Qo5TcoCoNXwm",
  "key24": "24caYGkQPPGZDVw3AFepQwzQcohD7aRPK1YunnkeVvoC6975Rk1LWH99Yvf1miDzudn42at6YJVy7U7PCGLZQwuK",
  "key25": "5CD39F42zjoicHKuNpdoZDHseoPSqC9g3Yvqz4g6ugdZ1bbTdapXLN73vcsqgNbfRHfHhiMPSWUBy6QUmbmq8H9X",
  "key26": "3A17b86sUmzHLq3Qg4kaFajhAB1VnKJXKQn2V9Druwun4xw7aqkGxt4kAf69Lbcr9FRKHesgrMjSduT4vfD7tDmX",
  "key27": "d1Mf7ca4tmNGzmJgQVnPt6GaFFZiRcuUgUHFRABuvQnPAEuPSEh6PBK8ND1SCtPzE4q9fnwwKKMaTVgzkCd9dqk",
  "key28": "1P7VmEXwQ15hrKydBNiWLt8efu74EPB7D8FL1x2GGbuqhghm91k5kiDcv4qpJBoeS151zrLF8WbthAkD7Wb6dHm",
  "key29": "QqVxYbHSYqhKGoCrFLpBQjkPsrXHN7ZythJNQiAPvNcvpooh7ExMMLXW9gzisB2q8G5jAHjGPgS439iQ6DUCPnS",
  "key30": "4cLdw9jxqgzegjUzJGYdKoFHLr6XhESZjKCxp5eSso9VNQNzSn3dmFatDFL422tECDukisaX5aUhCHorfTjUEsCX",
  "key31": "3iJky5cMfDFhgoSHXaowG64PED9DPu9Ypcpkvj2RDxHxcCm56M7BLgrYJNsDvydK7g41A5R97AwXRyNBJ7hisWdN",
  "key32": "52cMGMhTAeztHdedSSoG5NE18fWTqgdfcQ9eXCLfco3Wod7kW4u16ZHd9cJzQMU7kNXSy5BxpGYh4nQkvo7bF1pw",
  "key33": "5HXnmKHCe4oSp4SbQc43gJZsghs3DWHjoRYhW77iEQNvviWRi84gxcJyFhp37d8As4SFzAcy6NhG2KE8RbfZETbs"
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
