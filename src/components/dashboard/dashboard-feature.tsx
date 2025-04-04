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
    "5EfoJ5qHPy65qkZDJ6ooE7cSPAdwLzr8y6bTCnCbZ5XS2Vmzu6C4oEJy1G1jMxsqx38NmjLtJxYHnJ1zqTYxqDSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258hQm3KZFXViuutKxncAyQKAnEaBZt97k1432oAm64QrV3kLj2344PqnR4vPMKPYCpnFpgSobKi5GBXu29HfrWz",
  "key1": "5PZQE1BjgMsSxtvrU6K3uEbWjd9VTpKzTFWBMzCL56SGxcCKjqQxaLtUXwSZGYFDhMP53e5Ay9rMsCxp7x7PmoJc",
  "key2": "5rxnNEqnbuoecHnwGaLy9GhwiYW8wFFAxUYmM28VxqzAwkzPBygorRoSUE48E7q452FbDbDNKjvcEDWdq6EQ1T6H",
  "key3": "4nuYPKACeZRSXa1XJTRQdiTzAUUUUSLVVxq8aWNRFK89EGJw6aaRbKx2ZU7hW9oh8qpEcsBggGQGdMe84AQo6Wun",
  "key4": "2MBHyon9yDu46dWg75Rv5b9Z2YyiKFNQTS11W3MDvc5FQeBnBJoKB1rbkBxzxmLHqxzFiuB3HLYJv74c6ZQKvUBR",
  "key5": "5PcAqZyWL7NQ6A8WLEvzELbbwCzhjAfHW1qPT9aJYc2NfqfBpTdDFZ843jPwZAgLtRUAX2a3bUKsdTWsnvE2cjvV",
  "key6": "48294XJcbjMKLk2YnaptBzvEYaXAyfsE9sZSCQgT8nVGtj7nCzdHRffsXzmZnQMBzYPHJgFfDVMNCaLyB8YR8nFT",
  "key7": "5BETxiwKsurUJmenDE1ot6J9v861CV1pLc6UChr2VRkXxgdY8anAotUJPmmxjsqwWuRNy4nhB6m761pdbTrz3u65",
  "key8": "4v3Rhddz81Gw5666yvhaXJrn5Cnt7ebQvtn3EpZEHVCFfWkDRa5MojCdneZ7tTTgP5YfauLPwKZV4zyU1jkWTcbQ",
  "key9": "4KSca1ke7ojtWCV2jM2B28i2cX21owzEwV3GypBXjsn13sPcWQXK33K1AvGR2v1AqfE4Yw3e4dnozgfPq1mfgNo3",
  "key10": "3D6fVcMiGjmXbNdqn1yQHjHUYTqtpjKVkT9ZgGtWfzKUKkSKiCcVuFK1k3PrrkYeeVrdm38pkv8RnmEU3K9FMWiB",
  "key11": "GYHAu6J6rKMEZLS7k5d47o9g8srnhSvh7Xqa4Q91abM8L4jH8S8suMXtbp5DmPcff48NXop9uy68gHv7FmS5dNt",
  "key12": "2j7b7R2nwffs3vGCyRybqDwdMbRPmCZTug21eGY3TtfZEK9xXczhFmYPx1FhWSNUWEN1qJVMBYq9f1QRVPxGNYwa",
  "key13": "Z3YqBsegwZReBuRavMaRadcmLx419ik1UCCBZawqoxuUscSAmbDTmYNJ3nNP4Uqyb8nm8knvXgpLLLLrxa1o6CH",
  "key14": "4skFfAxj5KkB4H5uLqobV2p1FueBEZ8YR6bkyHqTj2WG3weZ8a4ebSttMcyDu2cQrF4xmK4o5PKG7aj9vknCTRHr",
  "key15": "2AcyqDnMvmYP1zQZH1o3TM4m8LtaUohpda9ibFmhhAmPsYjkwEmnZQkWGuCRUmKi2XQwg7hQMtxK63dX5ZtP3ZkJ",
  "key16": "2SurXJeeAcDqL1JspLgax5knaDTET62T1xnCwa2gUaGNH6XmVRsopnu3CdTV2h6nZFAPpRyySoUJKE2eFrnJV81",
  "key17": "rp3E5kiHZP4AoVVoZEPvFpd3AN3n4A1ct4qNQkwKGw8vFRXBoDdMHh6jJgMcUmNFRc8UuxxPJTAXeedTf27HUxL",
  "key18": "7NnYW2rJXQHU51uQKxCUcGD5xobx1WrnfK6idSqiGXbyRzNLAnDEuGQKpUb2nirNHXDWx1HxjUfhLCg6A5eUT9v",
  "key19": "dqAPQFjPXRbuDXdYcYgRz7et5bBhHGumL8djBogRn59fyNkS4n4Tj7H3tuS8hE69zZuPmVdUsQHGUTQKB1AKDEB",
  "key20": "55TpiUggDoQ8TSTeXfwEjGWrpqPD14Pzfp5wNVnTengCSwTi3GhpRuFEgXg8dsq82rNJUjhmzU6sG3ycBnKTB75q",
  "key21": "3LmUbj1i3pEG7CGMqSM2ysqWoce8Q4RVACWaVSwqaVrHCpCidxtT1FbRrQvDMeqHbRvi2Xj4rz3yk81Uys6x3n1M",
  "key22": "5K7cu4dqxApNz9ifwipvZwKtBmbdm7UBmbNzXQ87bFKjQDL8xumKG2nBGxQBLar4WYCcPVsvq54Lp5p45sYfCMUJ",
  "key23": "32G5tB8utLnggCZAorTVPqgja2u8wUtwQSP8MyKKdiNhM9yx5za3rq5DuTR3vrc2jmRMXKGrbrCRpbLhScEtqrPk",
  "key24": "2LQtasxbyUuGGr1M5sy2PieMk7iRU2BsFzrcQns5drPjARRfRcTnKceQJ2NyLdbM8szRhou7M6Xu63vy2BkvGnbD",
  "key25": "4dAKQMzUWN32fwDn781Qs1WMN5ixKXyjFCrnENaYv2LzpJK6k4gXZ3tFkBzrCTCizvRibXUkgxrCcf7d92P9VaBR",
  "key26": "4JhbzLBqwei96YJ1Wr1zvqFS3YrM5ngB91z2GymEgVWN98yujTpr7TbveBoMgzMRMKNJb7e9kzTqU5kKAk4s4ovm",
  "key27": "5MCNAjDAFYJBTDYNej1bVFapQk8V2Gi4dkCLc2KrmtMYeYf5Wz8qJFrxBfLZs3m3GazB6TFTWzfbXufsmA42JS5y",
  "key28": "5nFMp8UVguampWUBtYKcK2FL5fv85aQKaSHE2JvjFncA6RMc3qxFo4HbvEvxXWNepBokNVEbrQ3TqMwY49C8TVLY"
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
