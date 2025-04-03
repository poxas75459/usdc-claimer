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
    "2No5jeGHiZu45Qvg33QRBh7hU8UiUS4MydermAXjNKyHZ1DjmzgQU6P3Q8xu9HmBqP3DHFpajhmZkxQpsN6AXzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qwtaSS1MAwkmniq3sfs3nACKLSwuWXkbQcpqqEYrBenE2Bb9KbAiX1V1H9h1bRAzwEUWi2G17TJGRZaaPr5qTpE",
  "key1": "5Kwjb5JeYuEQcDgucLemEJa3oGGw32tpDQBH5NthdSRwhE4EyVqtzhhmQbmP4z6Bk2CyqqFsMjzUAyrm9u9XtUbe",
  "key2": "36CP1VuK3YJGJ7cfmxF3RYRn5DC7sNjLSiE6kQ7AzdYFoBUV6sG4ZzDGL1G4KVb37bfZXNE3tR4K2UCWLpZuEpLM",
  "key3": "RqL4BNr1KqrHkecfy9Q1HX7XJSfr6wvA1KCbEWdw1Z29XkfcHvzudKcoaEKYeRU1vRFpAAsDVwSdvjmFyMig1HH",
  "key4": "4W5Zv8Kn8td46L1mz8AA4BGzFbQcE7hkaBDYPexWepXtGLyt2gtgGVL7g69jnPLWVuNYKAhVZ4ctqYhfi6rtW81v",
  "key5": "3wL1RdgroKnbeVbu7zqsaTevMXnn9se3oWvHaVk2SRFPwGZcZntCssYne6aPSHDEUQhgtQt1xk7QhGbDRTNaUZg9",
  "key6": "4yKFQTwTCHWrGMQmhVqHmBUHoAWGav7Qe2jumLE1mJHCsgNrAB8N2vPRG2z2Ko6dwJwnqj6oP5RF42nacgM1qK8",
  "key7": "5mZY9zsPjoHPNuxHPR3PM3y4WW5UCKLUA36RvrEvYvBEXspT3N5JwhdNE8qxqed3mdoinGogFahi5VNWu7sXnmKC",
  "key8": "fUe41DAtKcpY3JkNW4BCT3GSHSaDXsTJSutze4rg8EPoVpYnraP4Eg9kCAWwnnZdQjF5VFXg1gSd81Y39CQtdAX",
  "key9": "4zXScMpzBkvhjLVtReKP7WxRDNcqQbpPi3ArhioKvefo4YSBGgYLYHoe7Sr7wPKDmcsVBPb8RrkHjzuixoSe86QL",
  "key10": "2y389TtPHVFMFi9Q8XhLveTZRCJ9pkVYUVNGVdtAJHYaT3k8n8s2pBL6jzpnWRvFpPEAovqz9ADsgKsVf6t1t7CY",
  "key11": "24Ra9YNaLispqRCqWteW7XuJuUW2DmEVr2cSQ5MhjsmgftSeHwn94sC1mJ4E7z1ccQx5dcLr3ZKnQVrGjWxps59o",
  "key12": "yebRd6UUqjBo4PMjKBiiTHfbU8cgbm96iugBVnVmdr9HHfE1X8gacP66ErUHqCqKpqZV4HmVeVheZH34vQRTe3Z",
  "key13": "UtPL3nmyZm5ES4UmTKEgxyJjNBFred1CcSXetmEoqXFLwmBn8n6ADnSrBpHYt7Pco2SG93SYFn6cD33ka4femva",
  "key14": "3VV1qcHz79WBAEDdu6hzQEiXmAYzr3bWPywToa7kbGHXYdM8AXZqjKN17gfRtqWJ37nQQTeykaDT7qrj22Zjcc4f",
  "key15": "4uY9n3ErKFfJqvycRoUYhTkdYeS5PsxvbuU4k4Yioe2bMs1Fjur2ED5GDDU53JQQnHmsgMkYPj3inKobEnfQLV7V",
  "key16": "5ZkQE5Rg1P1am1Z2D6mpPCzEtno7oFetSpxCpSSnDDjKW7J42vwCNzY8ZMQUGJT7XLqK6rL7LrrTHXzbYiVXyM4P",
  "key17": "2eB4JC5ntcjDPen1JpnA5bXd2sLgvCk8gnpuNY3fCjTHqgZhYnYiWdHXuMW2HBUMxpx2EeWpEYHyK8PssuENYj9D",
  "key18": "3XQeDFyt1Knx5mdYSTSfKd1SJrLHUEVUDJ2gjqagqBho9fQN7zTKYXKE8fxRiDxTx8cmLseX8kv9QshBH6fxSvdM",
  "key19": "3oinDTwyX3LcvDm19nVDBNTij5RjagDbRDNyuhhmBtGYQzem9BumWYYrMPsAebBmeGLupC7VHBU1FHiFb2jXEVg6",
  "key20": "3bdfqt7gV4iEutbquyCgBiuvPN7BKdfsHMXM7vCt2uQGXBLd1s6oYng4zb9focS7A3m1LKiZhjE2PzQsP2rLNryd",
  "key21": "2eiTeWUytpB2epx61JmTWL8LSYpjj5k1rNPPrqVjM6q4qVVAPtMXMnHFBqUShCDMMd83Rhr363J19dwEwxNapV7X",
  "key22": "3W6dWMHzPxpoVCznPfsJdjTZfhAN5Z822EfPuiVMrpmF8RCGveCwYDNtqaHGRUJJt9CNEdjodAeFTnAMcMiwKTzs",
  "key23": "58JpdrnrkNZd3TgsSyzdC5MsHdvkV4dqYbi1T44Bz5EQFrunvKLy96593BjLFFnzpnA2DWDc6ME9rMxENsVXzkyh",
  "key24": "2NJMT9sLuqAqQbw6DhFDPzzvu29aF6NFzukK26XiKYqbByzuX8j2nJtieTh78fSespavuuyVhQE8mvvyeGH5wiKN",
  "key25": "4pRQz4yF8JBjRXTTSMxne5jgXvfPgoqSPFSuyJwnXPszyvDFcx1ixzBGS1TSGMsQMs36jms3ZbvhkbbqN16jFhno",
  "key26": "4uJk2VreXG9H6vZpmMXAPMhDnek2DQXBvG5VCvFonfv9q1BaZYjoYL4GCkeEQAZuhDPtzvmHpbigiPNwpc3Y7Luh",
  "key27": "62e7j8ppqYoEEbmkDmtypqNKpYnRWrFTY737upMTHdbdkbSUv9n9ckbCbHRNHst3Vb7Z4T3S8vtz4mn9qyqTNLaY",
  "key28": "4DtZygV4wKHPEkWECq8ALEajr9d83C9Ri6TdVRH3A6rnHp5iBuKbfmvCXsPqn4v26Se1B4ofmBqibBZspEvjhe8v",
  "key29": "4KrL6z7MhbickF27Tyfpfme64Y65ojt6vYrEKdgdZwkPY4ssYwsQ1EujVyBDfr47sktXoz4GB7kMqie2xvdgsaok",
  "key30": "4Yy7qEV8UFvDouJbXiss3gaPk5Gt42jYX3hqzm6mxbPrzycaJEmtXbcRAxBwQrTkd5uSZXtWzjAh7Kv88GMUeGFq",
  "key31": "nK3hDgzW7gR2drDA8sBopuPseqk8wEjxgkcZzCHNASx6gNEkU5VvSbnX83ZrF5DS1F1n6oMDrXMiBL97TfzPWWg",
  "key32": "4kD6wkqk8Sv6b8JbDNAFrUMDVWKPPoWGiBzCmE6FdbjBSu7wZ5bPhPVfnD6daGRPWTYn8B3b2aQfBZKNGEtUDy2H",
  "key33": "5Z7XZ4mRWAezzTfAsiBprPeJA9WFPE6sEjAFSdb51zJWQzJ5Q33XK31h4mUW31NaUS6drvbK1ajFZ2mP8oxcL5X5",
  "key34": "5ssAFfiUqGxmjUvC3eTxu38mEJaAYcM3eYdbECrZBbUCSCyMqv5TAPqnGVFB8iqHaifV3JRCFmbV7ueKGqmRqq3",
  "key35": "ddsdPQ2RaiuYi2pstg1AvPhQg83hcPzj7cP7fbAjD49PQDchctvQRn656HYmNqoAHvu6oxn8HisNWzNYT4cQ713",
  "key36": "PmAHgJqSGKcceSCyVYoxUvb3tfYGKZS2g6zcB4xmaW6AFhRr75Fg8Hm8H3hGxegQvdoUqkNZEGA2eYfHavJGCpD"
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
