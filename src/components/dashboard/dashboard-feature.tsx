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
    "4Kx3RipFu5BqC2vxM4khXRfCbh2bXB22PGVZLE6aPqwYRZX4pjWVcDfT714bFcKdDA5dEGhzEHjq8UBEBcozy5ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQc9wsmJyH9x9pXB36H5X4i9XcGCHX5bTmtunjYSpA9r5fiddakk4k2xKbH3RoDjyLpR2cc2E83qZ6WZUyeLtRN",
  "key1": "2apHE95KpozBdKbQ6pYYxccWBrt5SA14ZE96xo1jTySgVPY2BqCqJNR5kcVMfEwGAVtFPyvYY28MnKwXrGEjVjJM",
  "key2": "5nDp9t8st1mpJm4pMFYm6zjDYBmaKxffNuzESEV3n46GpwMFs38rKUUVBpSdUhQZvfXn2dneTEsB6VSj5pqPCNfN",
  "key3": "3fVwcAq7sFX5madN79sx5pLpc6xm3vsj83NVsv9aot1kaiThKYV2pLGX1Yw5AJfCKP7DmYD6eeCevVPnwLRpsSNR",
  "key4": "3ZJNHPxaXF2FPELA4tdBD68SZfxMySkvqjHKwtijSYxFtzJ4mw6Rt1LLoMEYTYZky4xKZgDf8ApotzATqGQsKAEg",
  "key5": "GP8gnvnwgjAP3aM5VNCXQQn1Szy6r26EniYsedVw769sjHPzvq4LBta6D1hjb1b2cgcpohsPkor38FBmCYkCoUn",
  "key6": "539eja5hbXn8RJyaCKcCjP498ukmRkJtfVX1jSPBsxp9A21vKjEEpzZK5rg9toKWeASqn6iZy8zdGctuqQkzp144",
  "key7": "2WLcN6LmsygZfUGNbrNXUutxw5BLJwKFqJF1WHKz3NCWsnsAzzKDB4Zbhpj2MHBGiRHE522T5BfTLxdq7pJu6cYt",
  "key8": "5KTMox1npfQLDWMx95VugCa6caa42JYSTayMAu1yGnRrXZd8SCwyXza6pFxvZUs9KhzFvmxPufjeLeeEJz21Aj6B",
  "key9": "div6yEYKscCDFbEz7iimT3yPcTvxYh76jcKYMN3JdgxqczJ9WmJcpaUskegWeywi9FkREvPzMYdpA9tKHT2QKkG",
  "key10": "3eDweWHCDAKK2Ug6CjKF8JH8k1CEgZi8Cpz8Lf2ovkstjPqJrG7Ryhdswnqq46h5c2iqyerZpnfY7H7w4FVXPufh",
  "key11": "Q6ufaejYLt1YXZPyjA8vSHHRW73qAnKxh97mERhqni8oNpXFcuh3aTpw8GxkCcQ48r6pm1Gu9Mg2atCbZuu5QzF",
  "key12": "wggPyvRKVNRv28hmSRfLyvWzmUUJgYq8BGDmvHFQe8GRqfRyBeUoVkdCWXMyW7JcsEK3ae8BK3VR5bqKnhrN3vS",
  "key13": "2erwbZTx39otzx7uj8bTyM28VQzjoET3zweWDEuEwtQBxChVejMLMwx14kkUvu5bNkiVHaoM2cRQzoBFx6iB8KEo",
  "key14": "5iAQ8E3m8SJVJAXhMxyQHVSzfKpQtyBuyJZzb5TazzP88UrNnBp6LGaRv439jrYTUQdETYHV6szmjyYzc369cN7Z",
  "key15": "225LUfJdi9yFCdsB5ABaAizXypzcYmsJobmRWbBkdkdgoYS8KqyvLBDsrzJBEuyraZ5iEgiqEkG5Zgfd4x2tNn82",
  "key16": "VsGLg1asR8Y4aVKdZTKTCqtVHQjkxWXyKDFApAhbaCq4egdzWDBU4Wm5GSD1EqkyhUMPSBe6eFZ1so9EcW2ZxPr",
  "key17": "5tRC6BQ8Ug8idssD7D5x9LoEyJTpmPhTKrSjbDs6EJcHCU27UKM3wShmLS8y5mVd1Vf8Y3dzHYmfXhxq7PQAYzan",
  "key18": "d1JH7LJn24Ni96Qqoy6Z6wyi6LsHnyJHgu83pAMfLFHMYrJwnifLEKvjnmrzf2rjF2Eas4mGCWSyzE1ebqk3xKE",
  "key19": "B1T6fFMfTWu5z5gfE9mvHsV2LEbGm9gSjELYgvzXCYrPjjQkBBBRymLvr8KSLPRivvZLK6R7RvXQZCTrJXJxfTi",
  "key20": "DtH2t786pJMB2nrJo4KEXuP7y5UmgQph6DAt4EseuD8zZjcJQbkm5bH5HSer1bHivnUDDvjETKJqbvcMdJiK2mE",
  "key21": "FdkkbMrp7EU9kyJduYicu6nhxk9n1kKjZnHRG9ohZyUrYWRYLexX6bkTJ2QVRaw3puggwqzsyYStF5JumXHAFue",
  "key22": "2WchZWg6o1yCq1r8C7TANrXe8x2WFbJrAdzV4oqEFatznAsCoeaCstrj2U4wsQuprUPSKAE1tKMwp7vzUbBEPHcb",
  "key23": "3TU3scfphM9d4HNJYgXXpERp2Kgp9PUYDnZXAnyYqQUYidfkj6PitYVkw3j4b8seiq6fB2ecsGFgdJ3MAWiXkbjE",
  "key24": "42MDubJwgWrj9vYaqRBhhEJPfgxCLUUi935fNctAHeNH7FJS5VvunrNozLEpNLTH29ihQR8RuLaysDXc3HYa3dxx",
  "key25": "5MNMHhrjq5bRp5oC7SChsZm2YEfQjp3935riUuir7q2t34H9ZDuKZv2fSFmeAXhi1ipTdSDYHf2xAyRBah27FkcH",
  "key26": "5eygRhzWu9DvAf7YsWgwSBt271632ozB8y1hVjXjHsQWFvhuGrFKSwsuK1NrKkeCBdhrX1fyNswispupjX4zkQtA",
  "key27": "561xJvJsPzMZqD1dsfrA952o9um5iHZxjJtfccnH7vXRXsdD8SbNQ4ZeatAcyGDDtGodYqKaJYW1CdsdEZNAM5ec",
  "key28": "5qFkwG8MweNUwohVwTwuqw2XhAbtnfBxdL6tsEu41B1j7xUQm2qwBCh5kz2nnxH7Rv5Ryidxm9cnzoxMT9wsUh8C"
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
