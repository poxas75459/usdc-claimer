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
    "3oTwvXK3JhH5jrEhrwpmcptLFrMstT7cNtYGvV6AhMy6LEjPz4tjUZDNoxSQV6kjk9xnfbxjKg14te4uBArxuhYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVTgU8SXmfztv4xhQqFgmhf988BvvxJVDzUE4oqW1FmZedioGop7BwvN239ufMazLTxiVCvFLo9ZFDhy1XyEM7M",
  "key1": "4SVYrgHAtaQdTzbo4x7LLFb3fGAKcBBYoWrmLPsWSPULtTKbAWZTtbhD9fmvDtnBA2RApahzG2Wsb5BgqkBtsQmD",
  "key2": "3KuTWFvwwZ27w7TYcJtC14b5j3wZ5faft5Cb48qtZ1mnV6QLR5Nva62bXDg8kvubVM2u2PMpv3p4YhVEaVfLFgUh",
  "key3": "4r5vetDBmW67t2AMLLpCvFyRZSYWMmhGzxRqba6PcBBwac5rf7o85wrp25MHDLE8wWowhoZkkPx6Bc1TzfsKJtCv",
  "key4": "4DasRHPi2e7ifqjdvQkatf8t8yX2PgnibnbE61TYuCwuRH2b7sAsT7CkBtiCQwAZBsDqoFjumXcK2GYqwzdwrwvd",
  "key5": "3dVXxXf6nE4uuoBuRJrqyoeEcDQbeGuHA5pC9hyHiu6qyZS15cDtcejA3L1TFycbEojpeGMYE7TD624g8dEMvmGZ",
  "key6": "L1z3QDqrYp8HwjsG2st9HTv28pW6TapFWt26LgnvLMgDfwRoWRMq2AjZQS4HjwGv9Py3pFhS7auXTKAkZXToGqB",
  "key7": "H8Fx3GzKyvNvseisbjUspAwGYmynZcT3ccw3TAHZXo2cybsUfwwDciLdkCbHuv11qkLoyvkv15hdf14C5m6h14c",
  "key8": "4Cwc61TSuZP2Khn34g2bQnhTWzcABsUMLjXbWpFvwh6MZyyo5NT6yz9KhjHr4QgjQ6UfFo5iHm2s9c4uxv119oEN",
  "key9": "UkvcUN6nUKAwhAc1bq86ZKMx8LJDLq8CynV1FpCUCuw6YCemSu3LBPSFEhwBGxDFNsDF9JpTfD5ReuAChjdcHW7",
  "key10": "5xFA1HF51xxofgUVGD3RJL4Ne7sZCHdhaB6Awr97f8mbF1NXdg76ik3REmTGAL4qjYRkAt3z8EVBssUbTQs4nSTu",
  "key11": "2c2rYuso1qjMtn2ZgnXatRd18z9wWovvGPHAicpD9pEouZsTcbSUXPmXpmozfW452Q9mEBh6gKB9nFC9aMccLRVA",
  "key12": "3ELVkCcVicPtp8j1mdrRJr8xUMvq9W75wmNNyudL1u5cDc5GMMPFMUGfUrEBDzz5QCuvTwouYdo1kN29Ub5h7P58",
  "key13": "cFgequ7XRyf3pUhG3TuY5yz74fHT2f9B1uESFFknFNucnAgYshgveAmF7zLvjAHZ3CEZJ9Nx3Ureq6bT154twBR",
  "key14": "454V3UBYHHWe1hXUFgAmMsuJcGMUEUVvtktK4oowLW2YbjSeSfnxBM28Mm7MD5Q4YJwezRtCMWvqFY1mrmeJhDZo",
  "key15": "5ELyimQFortAr9nxqzZD1rRNTVKJtw5od1stBEsDopRXysKV9cntS9JZU6pnNcTtYpddgkCtaEHSotf7aiipJucp",
  "key16": "5Hz7E4RfEw9dQR89zaWh2DtJuwjXGDJ9QSeTm7tieRVo2uC8PgjJBmBo7zjaXDZQkCPXuBexZm5pwdXViuNefvzK",
  "key17": "3SNQPAwrjCcVFi6pZeocPX7oKuZXfFHhebMxTc9ShBFSgmzSbrWLX73jmzznqfW66sW45xaoHrYrETK5KH3k1ndU",
  "key18": "9PKyvVZnvxBbapEKvVT2zzvkMoHzfGKuw6NnvyWkoZYEvfKjKXA9vMYJFx63JxMenCsVmbbed4DA2bGTgLMzS2B",
  "key19": "2W5Rtz1bVcEatM8rKHmYLJN8WNdpJ42hKr1ifhSJDQDTJbkvPSXvCmgsYzDcoeSwMybjW8Ksacaa8JNSXjmRMMQg",
  "key20": "3mE8q4nCA2WcDvCZCbFtvKxg9Q5ReorZGVM8efSL38xb7zXynAoZHSFYwZrE1QT4RamZ2rzZNkh7MNuyX1XJYkgP",
  "key21": "3JNq518NuKdHzuZPshdYvEwXuNYoRHaR1AnJQyFwwXhsrKuKHiN7y4VPW1ENLHzPuu9S6RseadAF22eDizC9Eqn4",
  "key22": "3Ez6AYpgwEvKyBNtsiF9pHpr2Etv4vcXHS6FjUZ53CbJ5V56zN8KSJckM7ewTMdw1aiT7Xe5ox3swdvAsUMuJxni",
  "key23": "4ZADc8Hdna6p9FSMEcMV68Zvrrt8uhXKzWwd2fqWA7x9rYZWCZPZxyLS55Faa4du4qZU8jp7LHqxXMsAz6tsvcx2",
  "key24": "3NWXv89VALSuPYEbCBiYJAdfAbjWA75Tak6wubYiyR3q4hZrhZ46NPz8ajJCVZ54MkFA4RTEoSXyFJAbcRfPwnHb"
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
