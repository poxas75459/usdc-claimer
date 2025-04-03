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
    "5eUpyfEpQKyLE9Uyp5EP1r4juwTqrPwL3vUK5RwZve8UsWS6zuTdFTPUaYmn3iGCz9DbszeJx2Q88cc4PNvPbFZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBFXnkMQjpKWdfmqD3EoGGC4DfQ1p8KropNLCMuJ9TWx9bGdtEPKDfWVGM2f21TRitSZXSbGPSviEA7vnbZwKgP",
  "key1": "29z3Vso1ijGK5UAQr7sUM6DWraKAnmV9CeLmJhCJv1t2BsM5L1eGSQqNrXf7eVwmtCPMTMPe89HTaqq6J3g2VAhj",
  "key2": "5oRqKzhGgM9YdGamHjARRX8zdRbPjpXcrLd2dAP56i2Zete7ZbfpHqND4y38tsSSnzCqmoEicoVzBvXfgn1vpUfF",
  "key3": "wir1YyseHSCmarTf2U1fJAzTwEiDQfjzFexnW49sv5xzg3E3CPpQzrtprfApS3DaeCMPUbxqQ4g6wUYJDecf6G1",
  "key4": "3mn3ZgNj7SK8y5ickrNGuyPx4wqGYnYtxMmJ4YCq7zvn3kLuvboagtrUF6itNzzeHrupscoB6UQJtapKknWWwaDQ",
  "key5": "Qd9rVLJFVpNjCaVhWYyB64VNDzKccc4isgg1tYB278TAe5UWjLbNAtb5VWCJSbwURWM5iNmZfepZPGfg24DFfDz",
  "key6": "4edjCMQwEAJefKTYcVSdfN8VCaWZzrVasMua9MHBFxG9Pxa8kCbbZuyQmQ9Kps9AAFaKLVsMs6LNeU3XhWEZ7oYh",
  "key7": "2B8ZTwf1uHTs8bAShUbuzuxnF9RRLtgP4HMw9P4xR9bhjAssQ7Mf64WsW3W651fs3v3Dj1EHN5FByU85UrCuPVVp",
  "key8": "kzbEozPGwD4x3w2eh3phnkFdwt52vcH6BqoEcdXN3yN9yRRh1EaqUqqfXv5ib9mvbMwwjampaDUfJHRd1ciwaeG",
  "key9": "2UdYVj77G3HJgoFBKXGe2py4V2h1C2qApc7PCUvVCStwcFmStiYMpQuuPQ578N2TEHaDcWH5y9zvVVCprtju3yqt",
  "key10": "mf7zqdjJf7mqADLbh4FfbRH1odCdKuqM3em5oFWHjDNY7tp8YMtzf2W2MS2A6r84pC4QSzgCT4874gg2Fj3xkM8",
  "key11": "5BTHBdHvdAAJ4M9FcqKFR7RXHaU1ReQS3nBmAngZ1kkScFEMZNrTLJrFEg2kyzBSWmhUMT3NoTEkbQienFxhh744",
  "key12": "3eHnoF8q6sG8o9bn9gHZ5veusVb9LKrde5CufM4heQaqfRY4LNAPTcLRsgg4ibQmLy86LSdPCiwceNMr5RsMMLR5",
  "key13": "2AuK3FmrsnBnEijiRjfSMUMfNgq6YkA865cikYL7NpGSZb5Sq8vZy4VscBR1AH9ru9GxkHFWXHRsLCT9wV5cQfyJ",
  "key14": "24hvBVdzg3WmEQ2cDnjb4KfpKvCFRAhb4tcHcjsWqbKyZLJxPsFnunbstPUmHPt7eKfhHcbiU6ncwNGS36g7eMWF",
  "key15": "4pSRqLx5iodh9pwPK7cRaXe8fbckKn1zTebrVdWJ6SwPbjyJonEdVQCwt3sbAjRRiNQvbRBTv8TRZvJVoy9zeaF1",
  "key16": "67E9gGF4wTW27Xtv4g25pkAWbwCZVfqqUJX5DneNaNRywfQ8eiSdEKBuRY4AaWZK5hXBBpQmGmUhduTrdDxV2tEh",
  "key17": "2o9bHp7rcmwme7suxAZFJPNEtrFUiRXjbPVWVw7m1Gq8RAyRfhxKtTmdFWewWmVo3kPzLRG4RUdWjK6YSgh175Q",
  "key18": "2DWHy639bX1stftJJTP5kjEaVzLvXsvUyVRFQJHYPmnY78q5gQanKfWYNxUvhV5MXEvXNi3ArVSM5AVZ7F4Bby1n",
  "key19": "2P79vPmuYMhrdekXMZZYoo7Y68HBb3b2ErspFHrbGr969Psd3rkK3TRjDiD76tnGEdFpH3jHVQK9SfAVhb6tB9C2",
  "key20": "21YfED6qNpHwHuQ9bWuSVgCzkeBWaAXHJ3Bt61GEcuwhNNqbqvET7ir6LBwtu4p1QYCmwop48TQPpuvjfyfvCP4p",
  "key21": "2U5HHrSdYbK7bmUeJAvZUVpVMqfpkodvjZ74bSEMevPLMxrswZ5uLmvDVqrQi8UqMdpvrCwzR3wvtdqBPd7dG2Pg",
  "key22": "3GUQrgJgz1UDAvhmja7LTKeDEdS7RhVFg7dJYnenRyYah9PmVDHMN2TG5Me83Ty4EcaQPfqhmUKia85FVLasgGos",
  "key23": "5CnQH7nU9yoESkionFZT5rKCfWVpZ4msiqbWc36QN7uy6vYuHe9oqK1mGMpGcgvpqxnirB2TEPPi1k4fPTdQyikv",
  "key24": "62if7MXsuUeJTk64zep2KJbDVd2opqcymLKN9K9eceH1sTk9UXEvg3J3MQG56p4e9vWnF7QND7uYvucQe2SRx8DV"
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
