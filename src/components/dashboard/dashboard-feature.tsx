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
    "3DUwZ2kzoFx8DyVQmbhw5fmM85QPCmSXyDf1qEdPoQgC5Md45aami66ckLQGhpNGdeau47spxanm94biuzvV2Djp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HU2JqXMdxxxXqoUWHgvc9BWqw5VxZWHePxoVXA3hqc7iMhNkuEwi7rGqAp7gUQAkk5iVzhqEkXAjPaj994uFZDy",
  "key1": "dpdUxvXEv4HQxfopxFETRKxaiUwAJrgbGXt6ZxqbtWjys4VjobQmMfJhC6KuHiJYRysswwrJUVLvW1Nm4TCLsSj",
  "key2": "2WY2SsjAg9S4sRDiboetYbg5XpSprQVnCyVwNwE2SLUKWdZur5a9oAoJbNRPNYpfKmCKdtrwje7WuJgHMg2HuNig",
  "key3": "5X5gt1bKk4dWJHKvHbvvVgjFPpkWWtNAns76fMv79dRKnhNraVob8eSwWKeMH6vU7tCNLD2yau8iYQUfPfYGU8o9",
  "key4": "4CiSqkwr86d8cxNQ2Wn9xuSyZra2x8snc6XssyrFV3jLNCqG8DDBFmsjs3J9DivcMDw8zrzQMykJn5jeUT6Yjuou",
  "key5": "5KDWD87RTpTX7BspPLMo2fT5bcQvmUACgMLA6wMcyByTJAL5Xy9pt4XN8cAPPCb4qBS7mCfnbkAV9ub7vEMA9Au2",
  "key6": "49jAunZo4qQKJ1T1MmUYBgwBkhiDmLpxNkiDMvamDneBtYbsnZDqb5hVVQBivro6qpWoAHBiEGmaPzBBuKpjVzSq",
  "key7": "2uvRCRM787QQPxcejnJ5pcvMYXRpHrZQ1QSAeFX84dLda5sCwDXDwes3KoGZoyNKkCt8rLmy72kHkYdCZrS7CiQb",
  "key8": "2Xx5AzciEY2W42TuNqKgNiZ4mxZq7ojRte1xcBiLrHaHYL6FpAQSgRDF9czNtyw4nzNt7x4MUJeQt2eiGPeS1WXQ",
  "key9": "VgHX35TCyryX2ps9vEw1bgUarzR4eaewX8WybAhuu16GoXpWsBLZWrukg25wRbMAtkxgTsNJVFVcpgVmeyfHhBG",
  "key10": "3SALRSt1bTKbFEgYaSCUoMnpnpg3e7b6Yy1bnKSVcTLuceepCXyxEe3dWqhVfsbgMMmdfw7Vhds22szTyvjPxEtu",
  "key11": "4UbevPmM37tGMf84mFxGcwyWoWVvJBqXuNwRfkHY7YqEEMUEQGUY4LreSGqZ4XY5c3g2aadK3Zoodvz19z5q6Ko2",
  "key12": "5jEWF1jFrPocYeM5ZY1yiNLJHMiov1zkzVwxLokajUBXZQidmb1XDD2snWXpLHESKQ6XtVoA1Z6A664yEcwFR9gs",
  "key13": "51TB2ypv4U1TVZCR5wMisoYBbDY7qUWKwsj92iJWbmWVFjbpaBWLvGx3eBLtgr8NXbSK4XVeiAUovy2A7v8Q3HMx",
  "key14": "4dvgRDYQ5cMMFFq5AAGvWNCfxB3RjhzGWMo1ZK4HoBweFRYnPTo8yGhnSPAoBWegAzLoSMMVbTXf12TBScEW4CTE",
  "key15": "4AeoKtJGn46hVbGJy5JStCAicjXDmwFVWk3MkNkBWojZ5HSmccGYepsFQ287NSBuETAGz3Q21dvK51TwPRDYfp8t",
  "key16": "a68T9ouaaT9m24BoSR6nSUqffoogoGXzi6X17v4SNHNcZGGwuNCi6i5NwEDmtB2FFxZhGenQJiLgapRaXp8nnQb",
  "key17": "3wopMdksTJi36CL7cnmfKWdD95WRWXZCotmhpHWGaxZmFZKf89ThxAnmZPusFEC3vi3DDxXYW77ariPu7bCfezQC",
  "key18": "4g8pjK1ZDD3Hq5NhkLAgUpF6NN34RLv2iadPCkDCPwCRfAuNxLoLyy5FwTMsweyactHqYvN4d34XckTCLrZ6mnEd",
  "key19": "4yUme7sVCzthSUFCfCvo6bM3RLhqmk8DM1M9eBMr3DuSDpXekdA7sa7z24JbNrF1hYEAUkQTBagozKRdegH1e27w",
  "key20": "3LZkJxynaPJ9rMJvbedLvnAPVFbWta69UrYqtHn7Vo9AXq9sjQkSz5JPhyPQACQzTYnrQ2GRSNqgmPJaD47zVUNT",
  "key21": "9393kxMFFLRBZdTZEPzrDAE5HfwZpwaJAjhz9FjwobPrW4vw1HkMH8imATEwTTp3yg3h8KSrWqrgcPwXPmuENjt",
  "key22": "Za4vJ2N7PNbTfvR5eX16A6Q1RTEWiQGK7NJnhHPM84u9YvWAq7cEtevHDxqmiR8Y6cfjAM4UEM9V3D4hTheeK5M",
  "key23": "5TqQy2vTLzrmPrd7u9EUyLimVTMiEGXXRn3eThRZcBD8XX77ZXaqaeNYwZx85B3aMhBsxa3gHH5nmf15TRKN76Qq",
  "key24": "2w9jTJTJiaitTp8abJUaWVutSDt6wkrwoUimhsA4Kqy21fTADx8qcZd63SkTGZ4CtqpCuKofsXVBVd5ZDBy8Fp5x",
  "key25": "DD2H4n2crdbVkmqjprwmMEe6fPdtkmJ9J7c9pQRqg3Koxc6Di91VvG3K58HsbZ32mrFommpLEJiXJ4z7ervCmMD",
  "key26": "3evrAD3iZnHFVgegVVvgFSLidmhMRdG1JGJVAMJGf1DXh4XN8Qhxybp2TUVX8DsfgRDHYKuDRwYQxfQJ3BQituKD",
  "key27": "3ZhJ8seTewY34SbuZqjRX9qA3q6DotCLtoKH1ZX7ttxFGuBJu7vQ15uJCvH88M1g228SwouzdniBPPH9yB8fZcs9",
  "key28": "5wmDKePfa6whHDUTfjESZxpvXoAfAMKaAWgNZVASW735mkyxQqN4nVBjdsL6yktPfFmc8iu3Eez7XFYcGhed43Ab",
  "key29": "4Rj5p4Zpj2RM87vqy7Te2GDnNNsuAny79HeATwGxsLNrQkPdMY2YoPh2EHZZUPDzPRUCPMBU6g9wfyXuhnDK4wfT",
  "key30": "3Q6zD3Kmy4uio2eeRCnw2GgHJwkoDUju1V42VKGa8Vd31xQ2z1CYENewxfgWSUnRXrJpvbnZbhK4RtBXV4Nz8LHG",
  "key31": "iTSGk43M65WBdb5o3hm2WiLwwLPSyMTjxq6X3RNrkAiYjMio3H5VCz6G4vvMaALC7aLnW3XutH26pmSG7tRyKCr",
  "key32": "7gVzyqzPABW56BYYwgjxBUA66v9eY3yXxDsnseE75hXWab8xgK97b4P7v1xPhT3eSQRvQkjS1rbvKshH3cdaRmr",
  "key33": "5LfJdiY7STjmeH9gjsDNz32LVSbkyKcChMDkLH4K2J6Bgv9yM97aYPN3oqy2m8hNKd9vNxKmc8Kx3J467vgz494m",
  "key34": "51dWyVpRxEAYfj7hMSwdXsSwR6bn2qELKZsWZ1qiSFBP1TPaGGqMX3HeB7aEW7y1KDBuQZ1uxQNCJoibySPvXFNa",
  "key35": "YHyCCF4rt7pKfUzQZsd1b91M4ULPRP5c58ATcuaGRqkdZPdU14xtpL9iPEqUkwwrkCkvRAqCU243FrnHotuMZZc",
  "key36": "28SGaqkst11UFcTbh6bwighYiRDrbHyHdWLrVc62TmY1SuRNCaGgvUKtGEs6yroGnLdy4NxUGXu7PfUXrtGtqxUm"
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
