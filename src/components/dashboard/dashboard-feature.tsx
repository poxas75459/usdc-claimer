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
    "2YyxGHsC42cKiXrpPyFg3t9RKEHvrHHH5ZxAipizcXiD5vHibZyXPEiChhP5C1Zkd8R4U7MtRCpERrKFF71uFRCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44deGikrqP6LBwrWX1Hd2sXucKja2v6hjy7fEvpFiy5ndNuh45g6Ff3S2uLuTDPm3V1HPcpKJ1xtx58MwjS4hZYH",
  "key1": "5cqRtcUMipgNtkBE3Kc7Z4WAaweHkBq8A5CY9V8JUSFrg8xsLUzpqXkgF4SGRzg4A7zFeEVdgoRYcuVGnPegU7xL",
  "key2": "2z9Hrp3Pjf8PMeYG5eCgxUyJvXx4JNeR4Pc3QcV885HdJPEFBoxDLHbPdNUDQQBhEfBi1SWfBcpLrnY3g8GtpCGx",
  "key3": "cBTFZdgJVPKsVkMTsYpH78uLwi9AfZzsb1We19HCgZL6WGCUZgfkD2BR4Y9drdpoJ3FKRj3zY2CRQdN4hY1LAfq",
  "key4": "2an99frQPk5V35BnYbgJfKsaNhefByTLgk1KCbUyo7P4ApA2rB8t1SaecDquj1iikNgSb3uCMX1Fdq1HWtPzcSVF",
  "key5": "5UEgbKjNh6ocx2Ka1befmwNcehGEDzE9miE1u8xRRDVVTdGsnLGWdBMHaKzCTRHk38LBNSiccPoknt6fsqyv9oZt",
  "key6": "5D7t9KVJ9hLui1afnLMLXkvQ3Djg19Trk5xpaUaKx577HtGGc2sWztzqQNRSnGBwnV7ZpN4QJhiQkga7MHajpgtH",
  "key7": "4hvPaCfuMGtybEnKmMFGwhGgjfBD7SfqmuSf7DrRKHQ1fLeCGV3HZzomBHadvTtVpRS1SRcVmZ1j1izkfPUD92Y4",
  "key8": "2gGv8Cu9P3aAqb8d3FBMknpod8bhWACHbwVAu7WGBjBULD6rB1rcfjxUwcWW42E7wFEkWWtwMoDdBZk5KNNoLYVL",
  "key9": "2Z4fVmug3ZSXZdGS4vxStYr8gChyJR91fVARpZudP2fPZKd8bCREvutyuXX7C6AmL7cfeP5Zg2svjLvJRvW7w46A",
  "key10": "5eZMHxVMJb4xkZqVDF81Me9zNvqKtqJ14SR4GhdkF67R3AwchRG6ULCWHCQ5hSfazemM6i2niuqQNrAKcVQjryC1",
  "key11": "2jQLYVdn2ejrfKB285iLRCLuNresMs7PYUsEuYnUYswjqUoco5pbwoMRSdK2JZiYpX9CS57BwjcuV2mmrW7wPoac",
  "key12": "2riFJ4EaMpXzNJZkRiEUNCv1vbiHbL6amw6rbf7VMMvXbAf8WL5QhU3kV35Nh4d7wbJUvfx13FhhsPgfi8hCfCfA",
  "key13": "3c7SPPLSvw3Dhn3JQvYWt3DEeTGRFNLkhkQdLtVmLciEP5FE1kp22g2WMAVecGqbSv6aEdvCJTtEwVfjaQrLUEWF",
  "key14": "3NynSQtzAEpUjX3XkaMnd9VK9ftTgez1TwprjA3twD4ujqYm1FfAebfFTuVntPiuwHCvtC2t8wV4FVJVS4uJ13rK",
  "key15": "51b3QC4ApaUqUQfyhjrjotEMbkW7niuGcszGShi3JTYFphTjMS454KuAtYkLcsYt2vUDBVFnGzcMubvg1ETw7Xae",
  "key16": "4uZe9e2xpVGxJNgaz4zUn3tiZLgz4UmN6rcKaf1t1t62utL1wur39hGgFhYwLCTNr2wJ5XXWSq9bP6nPmJ6vdFw6",
  "key17": "65LtFaJEvBwLgMvdrTWJgvuVepc5ijPQKdgwVN84eiJ6njLfhvVRAitEdVoY27gxxR5w1Yd4kmsqTaEt6M89nTYZ",
  "key18": "4YbJzJQAACfd55kqHGrhdPVhSVuBQgxP4gK8tgSwTn5oW2Ean8KMhC9LGKk8nC9jiVbAwo4B31MHsYoc2JrfDuVb",
  "key19": "5S3ZyGm5N7s9UXT24Bu3EAsoZoDyLq64vkHMLu37kYntsmK8HdcmhZom6MFDmyXyBvYbSHZ8B3gqR8pWRif9m2JW",
  "key20": "292uAamHmZfj7x9CdNu9vBxHhzgBPKKMD8PrFuNp5v32zNE6qAfH8EM9K54Us4ZXPqfDHgQyouMYNJ9B7GiU22Vs",
  "key21": "yKfsECzBruuVrsLsQn1YX4MjDjhafJZfjD4WiicMeQurEL3yiwrpnm8oMY3CxhiYw2hznjtExHg94SFbvuFrada",
  "key22": "4EyoH9kcMMmq8Zfp7frqHcNLcEuMN898MKP1gKMjt8w3wUtg4pTibhBAcuPw24R42c2JEF4ri7FmLZYpekDnbDwF",
  "key23": "jC8G1pSVynBCTpKcLFB7JLVTSY7gzcGiBQCUPz53TetBk8ZxoMG43xmH83L8K98VYEGtjZrigp3pdjywoYPnSNw",
  "key24": "pKeahvxtQbreqaQ7ih8TxnkE9gxQm1Ku6nJohNggkpA3ERXBqBTfkyxFPfnJoLJbnWmuCxpzgstu9dFVZYekQ2R",
  "key25": "2vTHPWxUQRhdobhpqAsWCeEpo7PNYpeEMuij29734kpGa1K5PWWToffVStKR7idJJ3Mvuq4jCoSzMYb3XyqKV5oM"
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
