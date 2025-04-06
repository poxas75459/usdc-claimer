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
    "5t24tfksgpj1qQ5GxvbvWx9q9wJgzPaJm85opD7s5qVq1jVJ77gESombfhwwjTHDGpvKFSEp4QKxEGwLVnMnuuu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uF1x9gdB3YrsSfRnA1LSZKu7ZmD7DWZMEGfVLX5JhDfDR3WAzFfnA3DtJKfpowehd2gqSRvjF5jMT2tR9XQ8v5T",
  "key1": "3B6tuUfJaqVhBW1CNUFjBk8kivv1Eq73fgp3mUzJbmn4UtdUmnLECkD9kLmvCVFbL5W8bEg2895YZaAsg7nQwgEX",
  "key2": "5i4B4siABhP95JCLzmwKcd5PsJrXJqitoxXD7nX5p4V3kaM5EwPrEqRviqFd3tuhBhBvxXLuSiw48n1giYseDRqi",
  "key3": "5EajsNKpcLgJkPkMJjFGKiLtfucP95pUSJXezR18PTZweEiv43c7m9tnpGKwVsudLDUV2V2ktTEYekCUB7EMHSB4",
  "key4": "2RptGivTfa6SvEvDxiQYjmU5vusuv4dySit7efQNyvqyPeLenVB1pgru5TpGCZfSay9bDeW7XvStC75jPhz73397",
  "key5": "2zokRajWvPD5oFEonVdVNKSMT48uwiiqvLQkwq6GRWexX91MGNGM9vFxKpJMe2y6CDteCRUyKSgNJdJmWB74ZKFi",
  "key6": "3yqw7SBUBApF2ZywLCutdVtjrXCQY4sjvAp9PraMnWBD83b5GdDVnAgZ5EwZKkvwrhTY8xZkoZx1Cy8fpFGL2wc4",
  "key7": "2YQj5htJXzLUT7irc89AvpbNFrR3G1WNBXU46JrvcxFKUDKEzwSUkyCSPY8cZiHDgETVQjB7axcv1k13uaJDrR9S",
  "key8": "2qxmf8zp56Z9wdqPaZtwjpgqYcYMe8fMg3xje4yAc42vqjekAYH1JZZeg1JKRoRkRWAaJQdcjx7yhDDNRRnGHDhz",
  "key9": "3ERLr25zjoAUjMszQXhnTE4hSzkjBevDxioD7Z5zYdV6WnKeqU6QXAaSp2LWxHXLPkhR2kZx4ppiozU3HSCgWnVm",
  "key10": "5KyRZTQ2nAXtWAkoJ77U9GkyYiJv9ibZPcF4HKbqitjy8WV3hG3YtJkSchsEj1oQk5HVzWpn8GVFHsb3QXvrVeiW",
  "key11": "2QykprPLnB9m6DHpv8WqrmV4Z6k5bcTYJogZ36guuQreyGgTnw6SwFCcEkVdh2uF5QKfHeeGhTT2c13XFcehftRw",
  "key12": "5e4mS1zmAzCfdRnTtrKiDc4suG2PCmUy2RVUF13WM2B4sSaV9kHg6CveN55K5BHSMGNFzgn4ToFCGPLPs2gbgJd3",
  "key13": "3D4Qf57c6qbiMD2kQKs6HL4uyXJmozeeJqAMsm2uDqrvSP6uSNLgwaRnxPme75zkbWP1Dfva8ShtkRXdaUrTcxra",
  "key14": "4RNRo1sgCsrocsHFb5wA733TbycHJQfQSyXHcgFZC7V1gt4mXNdVdfyuxg2QbbWyX6YYaWhL5Ldfugk33perC9FY",
  "key15": "5ij8fAHBYiNRytkd7ptovtuhhQ4LoauJV77rj1qWjATDXWZX6RCFHcaww5f5vSeEibRMvT3rikKrf2XCZrz9EC1i",
  "key16": "5B6iq2Xogt4uEYoD2K9tZXYi3f8UhUm5KEUdhovs3MFvhDYdyBWY4PRMSevVFnXdZaJYgh8hGHABsTLe4T1VzfUs",
  "key17": "5FCaUE23Qz9duCHrfQaBtu6E98jeFFUdTNEC6TSA2hXERGHryMJ89a3RPry8NXRFDHX78jctu6kT5HgCrg2gk2bv",
  "key18": "3Uf9b3GEFtoYN9cp5ab5PLbNzadwtxDcTQD1Du91zCTTe62n9rKULwtNdtqysBCeFsGQ1wo4BaaUVY5K3cxZMKXD",
  "key19": "65ZvKzcNCZ331y5T7Kp4QSrFrbfvpnzAwjUHLeAhpqUic81yXE9vyyyr42t3m72256CWvxivgRxKUujJoTuWZsLo",
  "key20": "3JmpvXxWE8kLZx47MRMaGuixuic1qTUeRArrtdni3jtjEfq3uLh2P2SrvHPUD4jikF792ogZgcL6sgsbhLbWML6G",
  "key21": "4xZX4eQQjzjaESHLgVhZWXUoUsYGULKjV3toqGC41FDcDfu3LFQFZaKsNuCYB5ZAMK38uCZSq5ctZrCh8YtdVdXm",
  "key22": "2XrsYHmMkMd1pUJ6836MbNGPYhgFV9vh2EKHaziQSMbxdFfy1ysTTQ8yLiCNhaEZLVAugs1xVXYMroutLPKqCUbp",
  "key23": "3yoJGbJeqEYGRhqqTEHxLqVJHdxJbV7F3SukqmAy7FbFWynoum4ktgtUkEvtrfJrBdV8zCVE5beyqPEfKyz33UhZ",
  "key24": "5Z6Kmim7hgJLGe89JjJcMDMSNPnACJY2nK9DuA6L3NiY9v7LJEjPbiUTW1cgnPBLqnL4CStjF3Co9fUR2NEuXB9"
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
