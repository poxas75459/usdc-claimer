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
    "CmgGy4Af1miHDK9aa363GTnxsqteFfEiiXQRCDg2rnfk7yZvszUF22Hq6sUeFukXmX5pEjHayE3LzWjyi4KQiVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jfk4JWHoa4rFCLq8JfVeGfEEX8odpzwHChjVLiuuXz5s9w89crnzZVLHmopA1FTouUVViS544g3FQAR1N2UUGWT",
  "key1": "3Jz6btFSKZswMwuuu2VZnFRYqmnmLWL7UuhvryUJEAURLsBUQCVsQq7nShDXDKQxmfrPj9M6G2GX4TThAExBMHqg",
  "key2": "nbSPyBjV4nttwhpLwvcuAkZbXhwHH53fondcyvmw6fWjKbB45TH6aB5hHtHzho2XCebkjEpE7rwHk8ACU1ksHi8",
  "key3": "62pXA7AoS44hrfioN9Epi8RmUQaSHePHAnwqva3LLCwwt1SveYnBMDpKZpngQLpGPhGdfLrR65xnxpHKhycJx7an",
  "key4": "3etvgrBf1WknMAmmxN21U542W2Vk3m3Eo1xgHjdCsQRsVFpkSkZnWXqzjYrqLupv7qEG7Mgydedb3yMpQnZ13fma",
  "key5": "2nGQM28h9o5E797HfXZni1MQSDnqHZUkrgPt4wjigD2m5jszmEaH4wgVkEcmGXGzauHPGr8goFnBhYygNmCNEqJg",
  "key6": "4cn64QEi5chnkfSoLHSFdeWy4EMWwvNSSh3fhZL9C2MPEMcS6V6dJF2yLFqHjv7QQRnvBXyWEGuBC8RXUFzUq531",
  "key7": "4by42dRRPo9svAPyVJQmC4mHxjsXR746Rswc8zxysdBpYQeAT1i1kzrGKRcdNRWeShm1A8sKNwmvPNCJw18xVTgL",
  "key8": "2yucdVwcCrtcb1qoTcgyPVd5bTBt7RqDgd19meGHhJ8aH4ryZMZU8tC6e1nubuzmuwpF28Cxf2p3ttu7TZPPtkLZ",
  "key9": "5hc5zAS1U6jk7H8xY23pXRd7GXwFqyRmtbxmxYuJF5PPmA37Y9MGzmKm86thmgyhGoz2L15oN8qAkXgsbCLjsmpu",
  "key10": "3ZMhSMnRpUZdsc2cKNa64uz8a5mkPfsb8KkphhvbRQhyDLwX4nyo656KboUFV4HYoNngaxqjiECZH6z6iwf4WdGf",
  "key11": "5PbUSVwcvivUG4oqMfyi1TjNF1z1cvsie362TRhLi68Vw7LdD1XXKUV2wDkqjdcX6UWg8AKjTXijxEsJdZ3ti2C8",
  "key12": "45vcV3g6V6JNYqDqE5o6De71FX9J7qHSuCwFpUJahRvPEjtpXpNDQNxqXvwBba12xUQ5dXiSBpCMCc6iJEJFrbxS",
  "key13": "5WPYpUbMWqo1xBytBKt4sAWXfA1XfpgqhDNqSxGvCUH9SywEbdbozrKx6bQn4dSQTRvNzyxdWeBm4EmY4yK5APg4",
  "key14": "ggjBy82JgnXQ1Rs75SPwTrpdpbnQF6XbiT7FhPpgqHNv7UP44mWwQ6pRh6iGBgV22WwmUrynyuh3erQJQzgHYL5",
  "key15": "5GuEpA3vbRX9zQgY1qzPKtaYxm3EuBPH1SJ8DZKTEhuKBr23FEdsad8dGLhkXLDPZecm5iE5nPyBqqsHcjSiJBZE",
  "key16": "JDF2CgUzq7nUggzqqgsJ1qcgNn9mQBYRypxC5Ptd6VidrUNpemNciEWyahg8F73EExLLst87U1fWVdxPZWZqkj9",
  "key17": "5CCDcc2in2xw7Fvk45oFJCaYPYNQhdwCZL86NvU3ZgoYXqp9ykPLNHLk5JiEFgeWCrM3C413YAgcZVr56bffK4dX",
  "key18": "5EFTq13hVN1NZQXcxx2YE14mK1J3UExjFhmCcYXomakxPEyBb2KEi9Qyc5kAYdjn2w1c82CTKivYekWLSCFvF7p9",
  "key19": "WnFv95AciGkpSC2hXsrZ7GeDCAa2KH948inYNLML5cxms435NnEyoLK2PXxPUwkMLDGWjSUbNNmPnUf26zZaoUN",
  "key20": "2PAZTx3uYAHXtct2quKKvEEwipeGLeCtAK5JTohxmV8vPmthyXhN9mZEfDhWREHELjsfAEJsae6MQWqrmSzHfEnw",
  "key21": "2dRTaxogHC4gkkJDCnKm9rjAVHTQ2nusxYkhcPPwY4XN9TVEMsJ6Mh538uyfFghHa6PAYfSVnMadCeJ9j88SKSAT",
  "key22": "2VYcat8rFdv1wC54bNxWLmvzS9wKY8YB3rUMYWouBbTgMU1EXKuBYLfnm7ERDEd44mL3FFM3gGq4Vv6S7iTeidg3",
  "key23": "3EmQbC4zkmfaMneVazUkvLDMnTqYWoteE59oEreQGC18CGmmEpHvRr6ukoAYZqBDyH3Eq6WwJTg19CnnE4EitXt7",
  "key24": "5tNQeVnn7GmBSmDR8bFpH5gKGzxTzo3SUgtjwrC39WD7aWBKm1nUrrgUj6jhbVj6th9P4X9kbWsCQ8oSuqJr8zg3",
  "key25": "3zPgpX8bzkdqjRDWKXTkQzWs9Z32za2aUqyqbGDzwuDpZK92fCRyRerbpD65nynDvpHKWzW827f9hBD7GcLxnFtX",
  "key26": "5Rv5SXKmxdhH3k6a56y4iGsEgu6GhBsjo7G7NuRzfmPXz6GejB8JGkpiogKKqYSTbv6qsgrZDKUFDzLJ5cRE4kSQ",
  "key27": "zMdAjmwZPSttVe7Sn7AXnR9wgjJFXMT4KFioab8tGPHVBPDkZUR5Csa3iZSMMUkCWud6dMqBJkpMqKvcfxtpri2",
  "key28": "2Y8STeRhQYFmC2FT3GTvw7CyPnUQzNzzPzoDfgdeAtEfmsvAkrJfB5tvoLmsunvKk1LKXW4Qm2NY4MSignoVufFq",
  "key29": "46paAvNou8pBYSzC2FDF5U1fJoUu53nFfvsMTYgi3K6BWCeaSt2D54G16pKKUDF9zP6VF38QhyJn9GUi6PX8KRMm",
  "key30": "65KTZ9jteMkvhddMKAQ97eiZwb9dFBdudBwaTXCSm399ycYnPkF3dQzRPPUsrrxicGBR46tL98r6C851QB64a9Qb",
  "key31": "2tvRDBG7CpyjoeHWktnEZYuzShumfQkhMiGPWUciyRXAp3RJ6okBm4he1Sn2vipBwBDDh9B8xTx8BPHEXn9xdgNn",
  "key32": "5fxX2jkjrMjq9vtvt6kZznDVB4Edq6Z7uT3JVEUCpQHrCkc2myktVTEvaYCrTboaWUYv8aDiWwH5TrdDxAwhyaaN",
  "key33": "5rsNfo8cVoTyCTds9G9WEa3kjRM63wiPCT5XAApCyDhua9cCQePargX7KjhLfyyezyt7QxiW3XidVaYhUcaLuRLM",
  "key34": "oQAYwUbabJdHdy81VgPHiU7E8FaqFR5iJb8Y38iBF9CFRhDCcAZJvgPTPMNQ83JtqUetgoFkYAhGynk3gXtoYZv",
  "key35": "3BXxnv2kcdY27PXhVEGvTFw4zr4uGK1qqpfQ9uLzRmGRPFs5XDG5igjM4SVYQjSCVuVZ2MvS5rivfhqCYjSteyis",
  "key36": "5Ss7tQpN74vGj8umJ74qoZEqqLFJEzQvggjywbhRMNYfUWqtdrFjNETyioT5rsJSBTkUZ7spu4G7mVuxMoXHWUAV",
  "key37": "4GdpNR2c1Fg59FHmkHez7XE8tNs5MTGWjJisw3anWzYZwRaP7obb8z3EGqpquzyJdYYHoRJnYknsGgmmpx3QhFsi",
  "key38": "FBXaRFMbaEiZ1hNCpYAJYBnb1PXx4nmYQCNKdjMqKASLwg5FdRvnSTzd2Lg1R9W7ibFRoXtqKnHRUdPGQKMuzig",
  "key39": "3z1hg1G2xaj9h4B7jS3yfYxiMvKJr7uuxbr9UHHAj33eocmPMhYVWJa79DZg7ngxMssTTRSVVc96LP5FE1N5TZqq",
  "key40": "2j2egNyRCGnrwSwiNub1hzB3vP7gXV1MWGp4jLJCEGymBnDc7aLekZCHWfeJMps17MAYrT3ss2bYKYzZStBrS2ir",
  "key41": "61QKsTBchQYtFUJvhmNke3Gyes2DZ6NCLnaijUqS4VGmPuSzgPTkuNKvQ6PmNrZTGzadgxMrm5PitFu7pA3FTXeN",
  "key42": "5tCbs6v1snqGTZieAkUufQVMcuVaRGuqzbak2zteZRH1LEPjMxa9CaNL9aXeqcnFRCwMJctQpv8qh4HDSpUY7Qj5",
  "key43": "3MSfx3jR4bT3JdKgzuqTcnAoTkokG5CxD4H5j3yQzuGHJzLTphCB1KJ75WrdB7r7Cr5rceFhEK72WT8UUZHDZYh",
  "key44": "nNp2Avz1e9tY4tENspgq41dDzuEh7zGrR8VaVYYYSUByqSnuUQbMHPBQkzrJsC2LaV8c3CDsfNxAbzm9VhvFKiw",
  "key45": "QzRmahnkYfXjJhAmU1QE5QUes2WYW11TH6FXaZj2d7Z22L2yTSZSSU1fXG2yYdEBx7DQnCKGrf9paEArFZ2RaKL"
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
