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
    "NDnLLkow4K28PFprxhbtpcB6ucvVRU8jKtRiEX3oaqyinBUufSjtWhphtawYD5xwt2hFERXeBmcQvQJXGNdPXA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sX93BEyviq61cexjFZaqR4SyAencmpLjszXKiLtpuxPuwZPDQoCHEQ9GzzXYkHFmVPwZtoDov3dg1HEpyVUNPoJ",
  "key1": "2QtdEBdZo6vy4E8XH2DUWHtjoyMdPuGhaMLxMdN4vzG69zNhy9NixrgEVXviesxc1kQZY5mRxPR81FaoQwhLH1uR",
  "key2": "2LyMmKob7H58YLnjazyHJW6VQUYJDDjVSNjhob4zjR7qJE2rpicW9EGG9jP4y5vNUqD4T6Y3FwNoYPVsLHo6DSfM",
  "key3": "BCahaxyKNsiDbw6wW4eRUg9knTf4ZuWZFhov3M67SFbsmvbe1SgVjgFmB6JMifhQvqPsgahH27XamUerdhmmtiq",
  "key4": "22NNffddAuebLXyiq7Dwst7j4efA2oeFoSPYB4nbafA94DHGR37D1qTREzvsHYrRf4qNLuXMHPmuQDRudifd5cqY",
  "key5": "35x5pGEmdUwDYeg3yHz2hQVYrgthCqJqi6uj5mnMd4Tybp4JfpY53ep5hHpi1Z5KMFWc9QSNC3iu1mT9Ypq9Z3b8",
  "key6": "3dKUo3fhUkMfPYWYTSLpyb3hWkqYpdwGJguaVcpErrhXBpB871b61pV3mwV9e9LGdNbHHzKPatFnmP3qNb4rtVaT",
  "key7": "33uDceYp7m8YPp6Hz82vLHVM2Fec3zsLVJTM9fSWjZSQk56RiE6qLzfEWqF7aqPj8VqPWrjRnR8PC5FibuFcwwpi",
  "key8": "2Fe6GM2XVTNSzBoEmZj6nSe5iD36hLVmCpdJqD4ZKQa5BX1GmVym3JFFSJdHSSNxqtksgUdjfw9FWDjKW7ZbRjJ9",
  "key9": "oBUBnLDzX5j8sc7LnVY7GkRRhhcb3AFstrJPY4wBeQbwogDkri8uSUXE8hV5ntghkdhbgQLjj342jsuawAxsnMC",
  "key10": "2LdyGDnra9YwtUrKvceAjyW7uGyHBjiVGm4kHUcQrPzqYL8Gq5YxZtwabDPVeiQYUJJjajhDpVmsnMAvaKVjjaMT",
  "key11": "24RG5wp1Kx9ZPBFV5bVg5NsVzYQfF4bhK2TpNTRyjJ7iXwX9AcepeKopBbMsrJe7WtD23tvqh3Na1TQ61pDMZDCy",
  "key12": "3kvAv1xHXmHbN1Bie8Z15TVHifbMutqt2DQRTZVF24wqogsAZtugJgT2WT8WBvAbPFNkqbCWA2Tf3VhceBRxxYuq",
  "key13": "jVWgxZtvukCRmYDkh6kyYUxXdgzCZMMad9R962kQgqUPugEGfGfUna3i2vm3qd9GrDZt8PpMgP4U7ibS9kXdKjz",
  "key14": "46NGZmxD9GTniyEHa31VctF5nYKu5FGEkqJzoSzdooXtDLssKYr54mQ758R1Pi3Zju8Y674VLPzWN8Cty8zdP39M",
  "key15": "3n6BJbDiw4pv5ADKJ5tL4hspZZsFeQT8QGFEgKpBHnMsGncpKSNfrXxaKCrLtnKiwxx8NJzjpMXPcRwteEyu8Qyu",
  "key16": "5eqgNe9UpActtJd2yBYvDe5FuDgeZSFcwSkXS1Y5qfVwZuRwWv7Xy1T39xfBJ3oHnLWhsq3H8nvJicYw3MMgHD7Z",
  "key17": "4BLHGXY589XJqvLbxkhnu7FmWRjFaAuh4NXdaRJKPDMBE96maAbguHdH3hGaeXyJ747Lpo3c67pVvUxXE1Ca9hJA",
  "key18": "2uAvRfVkun6T6T7sENRhdysDPxYmLP2T6hVfQvenV6BdASUymBxu8C6qrxKux3VDsjCPTAft1jQX8C7Eeu5f7DAx",
  "key19": "iHKkMsUce7grbJyDF2hTDSopyS58vAMna7LVcERUCMabPnGt5EvV1EqiAVwbibPc5PkFegWbLHWicKb9poSut1A",
  "key20": "48A15HdhWLEWzbxoTLYXWPVmx551N1P1CySUL3qk18nzuLbQHmMrgYLFzdBRLZVWDwoLv4BoKvyMstfR8R9kVGeh",
  "key21": "5nXVNFrtehvmArAQLhksPdAi1vD7T53VrnJsA8xgW7d8joRLghaxQgquV8XzAJcEgZ2q7jShwcKTdr9zZuuqv5QE",
  "key22": "59agFmiaudXsw4CKaZAvPfqeF2ursmJe3gLn2A3TGGE2cZDKEsQwHhf5o8jj6MyaN7ARz2Cs4EYuhdC6jDMYUdxB",
  "key23": "4GtijDXAbs6esmZp8897jBUzdWKttJU3AA2D98R2QH5bparseumXaFATGBaGqjeYGFKxdJeMpCxw6HGncpt1YdtQ",
  "key24": "4axPMP2kbZJcSqh6YKpiPAKc2Faq2ximTyUEQPoz3T6asn8UYuNnqC19QEqe68gJNzSVuDaGt6xPdfYfpn24eaMZ",
  "key25": "3B81qJBKf65h5rz5355rWGrPQvBesz3L3jZVs1AwxwY2Ny8d4Dx693CPq8qrNUrszmEtWy9nRUiuN1vRKamPNBuR",
  "key26": "Mhf9qXzq7BHt27nUprRhxTRT7AFaFW8dkuVoKrrnXmXRgQ6xpruY4ejDpWBg9FCzroy5BQf99kyuhUXGcr7PTGB",
  "key27": "42neVMC3Aabg27jpacsbxMXZopaVtGK9325DxVmob1mP1N5U6rByAUFtL8nPqqCqyzCAKwbKpyb9oo6csvCuHBL1",
  "key28": "3KEczJ2ie4hiama71uxKgdwU9vr9aRzK1coeoAQzoQuLHY6e3pUk5qJFZceEZ4VW6pFby9bQxPEHeKzZos6issxr",
  "key29": "2AhVM5Zj2PFVyfCFuHht2s3cnXd2ad9zmDLzxfbmrBv6kTMaj54UoBUaEUVK1hQELBaYdQWUbSDiDrJKPGSuqhx6",
  "key30": "5iPLkiTHFpZpsV4DEqyAbqLTUG8N1jZC16VfHyh13AqtgphVgMPNshkJciyNzKzd8rsRUR4KdxzU5Q6UPZW5fiAw",
  "key31": "VPkE914ek1U2LjBS5JgAgdmAjHEJsVk3BMqPtCLoPTQVhxHGSjMXHunKsUZFqmUgBhumMFgRCS6Uvyk8eZQuLBv",
  "key32": "2KNdM5Vwkbinq5f4ZQKHhTt5bmFppUGYPMgoySfDNSrMrgCd9jr1Au2gwSeY4Z3fX6VBBiKJJaQtmvCMieyHf7Vv",
  "key33": "3zuUt5CZs6H77Sq7CAbVX8dq6PbvGbhZWtqrDjdNkRNhyWGqZSJQuVVwKvTkitLhtDF5AMH3NGraorgAXAYSgEaG"
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
