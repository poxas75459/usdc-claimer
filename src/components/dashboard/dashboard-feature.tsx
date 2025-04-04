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
    "2PByij2XHmV5LMFjXk4mWtP6WdzCS1GNWNvmnbXNcZGKKQ2AiovADiHPYn21iaRymXdLLpz8y8qDn6VawGBsypEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mBF4gTsGyZv5DX2xhAbeR4JSRSwvAEnZYCMBB5rYXovwNbfWrbbf18kZaSEqMutSBziin5yFZt8xJRa8Qs57Vs1",
  "key1": "2avfaqJ4cn7zBWaqTvsnrDcyT732T8chVAkYgnuTGC4H9JmcVGdn5JpFQTgEvnHWbBU2FRykhAT3NdDHg3b4SAyS",
  "key2": "kNXyY3bieTqSkxiJmdCzYZ7xf2e5exCkfB857V2hbQTRHzBkt94mHrX1mT9U11YfMtMJESbVwARMN9GMMfscS5w",
  "key3": "tqyk6tGoMpYT86LUqhHu3WcpBJQyQbDAt6DjQNXaSKY9JjiCMo9k6FkLqLLYNugeeNUcVmpTSAR88mrZNLSTzpZ",
  "key4": "4S54sJKCGpXwrAZoEHrFYuuLTcuJwWMpw3iJ5XJL4FKMnkY3VvuoJ55cJWNX9WMvZka6zDBZj1whxqzpa8S2CUMY",
  "key5": "58TkoXhWAZAQqXHLKZkxBx3Xov1814f2JvsmVYVjUkAvs6Awis75zxDtAq9YvTSZLGBpsKG8WRACRwLFh6WtRsbQ",
  "key6": "5hMqUuemuJp2b1Eyqr2vdYaKrRDaFZDudmbcJa2cTiRxwCXnrs3tWhVj428vEzHQCvjTuMc3JEZ13XfxcNQhz2Bg",
  "key7": "28G4q5J4oF791EjVWYichdVh7HwtdpwE1aPX83JrQ1P3w2uSLG9btKoyPcCaNQyFzPrDRxSP1sDUsYZsRjyKXKkq",
  "key8": "4SGkWbsTmUqCnLyXZAZQ3yFgruUEXqNaMqnQRAN1veZ9eaV5FgXbXBm5hFngPxjwbq8YL93HeWtsi3t4raSDHr5p",
  "key9": "5DFPMK8qEbwgGL17oLZVzL8ULteN8jmncr3WFyzUnzpwfNYPLxoZmkdD4vRoAfxR1NXvXvH1hK4jZbuv9h3wcHPj",
  "key10": "62hVx7wQLD834txFxnTnG4bAauU9E97bx1r27wuzMy18rHVbF2KT1Ysr8rQVxVcQvoUqRXm44TzJgqqnpWpKcJba",
  "key11": "2GnRFfT6PEkHbsGvtDUGxiyWrswr7TWqrLqPQzEpSq5WtoHcCHNKXVsLsi8FTtp4pGFbjkUiZ1pXz9Lbd3erf6k5",
  "key12": "xmgoeGRpHbBXgU8R8hXpyPbjxvXKfSputB2AgqPwm76MwD6kJBVFUpz4JWnXKUtqDirPZ9VxrQ8tcK7MUZJcdQy",
  "key13": "2jVJCr9VfJCmrkTsoK5cnLHjgvcqBqozP8tmoHkiCjsvM9puSMspX4jMfTkdkSihY3yxkxMP27RePStg1gS4cevX",
  "key14": "AVYmL3E2wMtT7UPw45RWo87UtcmZyPh3HMHpomcYnTxZZ1vQfXxiGiyCC6KcgzKtApad377feJuiLN7WAbPnsiq",
  "key15": "3EapSGdV7aqbfb4v8tc52Tmcws3xgTQwBg9z1hjeuRCNeVRBkJNuLRbPWsg1WLN9D3J7XsAgScGB1uWJR8WK2mLS",
  "key16": "3TuNxE6YnaqV6EGMfXYWrp57SXk2vRWdmLymRaSA2sHagrv53vxSYBuXC251JdbNuciBLKVKEHgCtBTXYx1wxVcg",
  "key17": "4vb1gNM3hpAcoJUXDaT7Xy3LCiE5EiuRLmDXvTrJz7XV93z4GDjPopXzE4SGDogg5AfywH9iENcc8hooxFYjtekH",
  "key18": "zosfBTvEdAcCbjqPqKVG6cnx5A2xtZHaXzTQfrg7UVzVQLWgpWUJExJ4gLrEm59HEdqcJCGiQXB6HTrcZayG93A",
  "key19": "3HrycEKx5ZscqjhcgYANEp6ffpAA1negcckNLZ3TvK7o6Df7Ygzp9M8L1tFhMokNh7kr7RTCaP5JyqrHdytBo792",
  "key20": "45xr7LQpvdwixdtvqT1DGBDJajr8Fi36mLeS4xsqGfCijQEeyHs2Epbj9cz5TQ2LMAbHDeiY29J67hEwnoeiqgo3",
  "key21": "5JrrkbpoYW7E2fjws23M6BPbh5brrYj4RFaj8SpsYFDjU3v8WW9FFoSQY1CS9tbqJfdbFRhySwoJ3aP7D4P9vzgy",
  "key22": "4ytGhmyjvL1dwHcZ7wr4ZXr19sJ4nPiPh3wkyn33w6964cqCmdWKT3TCrmQVEvct96QeiUYHEA5g3spD36qmXWRH",
  "key23": "5smuoe7nQXY1zPp9XJwRLZtNwrx6AVEXTa2YgxTkwhyogyDrofZvces332wP8XzmVQrwkgcLmCetvtZqQzXNx1c3",
  "key24": "2BaTgPj9HHPYC1yiFuMwryDHBm2Gd84Z4WKtMN61rofCwdaKvBG7R2n38FS5P97TGdubiwbnphRvQHGiVYkCuxPr",
  "key25": "2y5od6RXGBMEPZbn7DzYvdvNmVNEXvJPkko6PubhQRwbqCURHPJEdRvQbcyE7ts4HKLJvr4kzaBtnWEbv9WMphaV",
  "key26": "5ozhNBN2PiuBdAaGJZv8ZTLTpq3UY6DFooLWhuWskTSWkKT1C5gfEHUmF2eFTBZR6iDiYmuQfmpE1agGu4H1xz4w",
  "key27": "28AHLJWzNBBsPVgMZ22Uq4pB2g7h5q4kateH71a1rQhrNmwFPrMvBj5S5vh4GN6j88nhMzjkripFrHt7FptSG3cg",
  "key28": "47U1iQzX1cN5HjJteazPhySCVcvoV791jqDLir8bxufD6nEpnG3yYWwp5hbGGyBoRjoxsagKnhJeyAA3T2CKV3Ee",
  "key29": "3XwFgwSfEjjVe1Vq7idMeJgZGcYF3jedPQkPy4aWqdLdevvfCwgLt5gJcfBcXiVcAoUSaHgfaiyAzYhFCx8WZbQZ",
  "key30": "3Y7DwVBKa1rbWuYogBq5kZ5dchHrntsvZ6fz391jbWDA1jY5Smx1zTyN3BUgv5KvaHwFzVu4YZSDFX5bZowTGPhL",
  "key31": "579CdP8rf3GMVFPVevHvTzXMNtAKJXyrwynGL9r7qzzid7DVvGUHKsNyPhyFFeNvWFv5Xaoib4xuES7ssQgBrfAY"
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
