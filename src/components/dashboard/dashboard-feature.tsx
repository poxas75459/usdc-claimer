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
    "HTn1iQVecV2ntyTqks3jgY8AiHDbj8Mbd7avEuHXWdM6qxN99yZJaffUKKWChQNuwakakU4bbP4HT5uoaopw5cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "644kBDb5v4r9EoGgdS1kcdShCu9WFG8ij4PtK9jCxBWa1wzi3dWj9L8j2RcVUbq8h4S5WyaZdzb4fJJDAJ32NDZV",
  "key1": "2RQ5PikD49h9KsJrEPx1upoHygHMTwmH11cbjqt9nhTPFECxuqEPnnUFYwQe9TsaGLMiF4NRyhFrsVaxVfzoFDze",
  "key2": "UaDAzZH31zrhu3JXB6ugDGtJ92DS1qymLzz4CEdHEzrvCezLA1KWHUY3MwRd543qWKbKSBvyhFCQmbRBE5i4CDe",
  "key3": "4U3b1BEXH2KybmhhC3cpeUjdAZ9KE2eDjUt6GNsnxcSTJsvtDAN3foET9JPz4fXu1EHQt4xS97x2owamUcUApDbV",
  "key4": "2fDXmsmpEUzVnm2EFX4JGrzRVjJ55AxRD2xRN7sYCybvrp5njmGKdWt5YyU1j8KSXTBhu3ha9hDw9tnQad1SWGBv",
  "key5": "2ExUhKhTHxy96VxJyou9DcZ2hCLdGa5G1yJF3KFnnmbSQjpZJujFMAYhC6Cu5QWYXxNYRxzBmdQmb18nzu6Na9Lt",
  "key6": "4knDAH68HZJv2Npq5LbMvPCZCHR3tRq9JUa4otKjqszZQ9awigntEsChxLtcGtSXrefk7xd8x9HmCn9DHQzDFXuK",
  "key7": "2WeweKMCEQVKczfW37aFyr7KFZ8LQhmP9sGy4szmHTX5UTBgwXFnGM1w6Z9iPALsJL8remXdzTKvUR1K2AfFuTWZ",
  "key8": "2Et5To5p4LcEJcZugt68ANVzGDHTXczHXu6AyZmeXLPwHCpbKrMyKtgPGmLZoBtiKr5yCJZABxmv1snGPvckVMq6",
  "key9": "33JXfsnYJnJA3BKF4ykw294M97pi5gmv7jp1csUKffmr2RBEqGejtCTevXGkVQATCfemnBwibWjMZKnoXes2ExvJ",
  "key10": "2KFjJQ31TqJyw8KcwoU86xiRJjEm13CbWR7yKPH8hCMdpxL1oGWCrJvNf5rx3aesAnbpZSzhp1a5AbhB9DE6xCSN",
  "key11": "1x8mHUKHbN2HpjFoNnbKpiEF7e9j8ivosMi4grhMXDkAoAApzgyYdqcPQFnsYh1MqoHgEcZVuU2YzBFmjz7381t",
  "key12": "2yzbjMeshbDSqPTuCCDyNrxg12Kcm4cyL8B5WGaHrRhSkv9PwozUSLPGV8V2Z597rcrcitdqYTN1fLoGgN9BkT9F",
  "key13": "4a6H7WvJp1yAvb5DD88EbX21dGzvgWqVQa9DMEv5zmUVGkSU8mUBh7W2nxvv73jfxR856NzhyEewxk9ej6b6Lz8v",
  "key14": "3TuF6Fe9B63m18bvukL2FFmm3hgpmmZiS37AWjGUJ9VFGD6oaQSJFfQygaZcg6UBL9TvD6YkAur7nBsdoJ5eyPcB",
  "key15": "4mEcYQvMQJhjbTgwpT3p73yov4DsvZqk84GySnh1RWWMZmdjX5jzUdugaSxf6Sja9ZpYLTZMnpXHVp5LQUGtDuuC",
  "key16": "4BgpKKT5LVykWMcQH8c35N8FztYHksW1BXKtg86ijTQpwwo2JFrxFEi1ZjBnvYo9DK2D6rwaw8WYtuaeGTcRG9g1",
  "key17": "4MYtn6ACPuLhEHUwMdWXFBhSKSQN39LDPReid4mJpRVA8niCT2zQgwgGVhy4EM7xvq2RjFcG4yrxAmmTHsWzX5DA",
  "key18": "5QKvijTcEFk6rNHHrJx6FnYgYNAWF4yWKN8thWD9hYZeeDXbPStbnzmwRkdSLHiQyYUsNKwQg4wgGz8C9F9yRrc6",
  "key19": "5HhxWZnuy1EiZVJKytwgApor8JHVScV4iXgF1H2PZwqrUbQXrhqYLwQpr75WEuyshRm9WrW5g58Nk7C3XwsATyw2",
  "key20": "4zJGyYTt2p3Y7ts2rZWe33EgdVJAceffxLtBkqeCkzNeBeaGQr7s6WqHfV6ycwbC1LVfiBG4Kwk6YAPYCLSA2Xkr",
  "key21": "4zCupWLeuk8NtfmaUis6qDkAgPU36mA5RuQht4X7qwYo5eaQiuURfjswVPE4sT7hC8PFTX9BsQ2Rp19phtpHeD5Q",
  "key22": "5TZDCFBNdZnxD8aQAhMfF8g4j82WJaUjKR91Df5u84HjxGktD7QKSZyc4RyLWy55WzH6aFnduRwKMPxWfeXzESa9",
  "key23": "4ppgRfBm48reFv38H1tbT4Npu3UFZ72T22n1MHzaSk1uHp4iBaWG3SwvCahVgKVuprb6eU5SP5Ca3Q5Loooent5R",
  "key24": "3EBBYdUS5U8RDEdXGiPvPoEAuG6P45h5x7z39wHUYBDpuZrweUzSuYY8ag7wfEgexC52JrUUEpC1u5HygV1SxQg9",
  "key25": "5kaa7JPfXEfmfeUxnUWbqwigRM5X4sxq7wB5G9J4yhxrvFDBge9PFL3d1w9zxPrgA9kGM3BoGJAWdMexvArhyrbm",
  "key26": "5aMfb9zybapeKG95BEauHqd1fWeLv8imTDvDvoZDtpxS4sp95tYpn3vdaSxejQByhTv75FZGUSW9EL9jiZnBAuU",
  "key27": "CPSZtejdtsLnAkr5ywPiMtu81HkBVQVsCkUgzxkW1H2kAKsy2TZfbTkneGFTWU2mXWcFUvASTW8yhk32CBUBXY7"
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
