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
    "uXDzAE91RUmwjLCGoBimxxi6J62ZYwuFd76ucQhUgkZEQohLprhAYLKJHGgTTJ4eT1hm9f3PmVfMiLdZGgmhw5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i9HKwbbCGtWYr3eK6MnSkEX8SRDBUsvixuABgeRrmAfoRT2ARMWXQdwEb9fhgAstmEbYyySpWvboAvyjPwcqdD8",
  "key1": "3qPtM4D11pPnTEuX99Z6oazkmRoQdb6rpViDAoNhoMYsrLiCgof8DiYX9bTa62SSU6jT5cWYaj79Noqumrze7VYU",
  "key2": "3YR7UGiuk17N4rSpQnmjpPP18Apr9sJB1zvYCXCAnD8MMBcHx1YHzxUCyWCpxYMzFKGPtLSdTE79EgAcXhDhtdVv",
  "key3": "2j6RRuFy2vFuxMqxDWyKtpAp413LoXaT5gKytzZUSX2QtH8gQBB3DnHy8omdZryHgYZf29wSPpJg1fNwuxexaAkD",
  "key4": "4WGdfhWVxS7Fmh4g4PUDo7PENzNqtk7PtpMDVutD7scrp5rz7kaL8uHP8qtEkExdkPUwk4gtsqXhwEVGQd8CKvzV",
  "key5": "gr72GWntzfCdamMVVUBFk4RGfMNTcL9pR8gXCty9VjriuSP9PDQcGaSjpvz22DWdvaeteonCGVSz6eEbB5jnHut",
  "key6": "4oMg9edm3pGeL3zZdL7QgLEsWLitjv8CTaVwsRwpZDVN6Ng9tGMUcFuAsSwHrbu4Q6LM9F4zPaj4XndNpBeUKGxQ",
  "key7": "KV1gRmJzW1EsYCh4o9FKQwAzkrWsAzRidb8bcVGHpazSimANjYXPnBx54XfAh3wiakbbAWLYsaU1FUENjGR9BPj",
  "key8": "66tj262eDr2g7N5K44xUArYkZQbB9qnLSzK8L1jHCUjK8bomUEUUxr3VpAHwUDuyCNVdVeNAFLa4e8nzEq6wiNmP",
  "key9": "9JRZinzx4fV9nzayzNJiKF3nHo3xKUkWdFXEFkqNY8EeNiJb2FTrFKNaRD3aJfZMdXd5Z6XbWV8PN2LBMrW3DLE",
  "key10": "nNVV5ameJWNHfGQvfVKhcmj2LB3oxB2r9XY65VRaGfpZFJGkXRdmvDjircV46RyY5jEd8m2qHLfENyXSDvGCBJS",
  "key11": "aaKBNFwTGXxL2uMLb2huCCiZWokPr8eMbUbsd5BNv1Vz8QwpcQ4utYQUg9SCHtkDHuuBS4FHosaKYHY2i1dzqM6",
  "key12": "48iRQmaS2DNhKcCvPnV3FU1uaYmW4awAcaGR5CR1HwbtQWo9CRq2JKUkt9VkVPmrEVCeHe9UypBGsgTsbbdakLEH",
  "key13": "66JxLXvVbmjgMaQrvKskkk53Gf1MrGLa44gh3mMNtD5XaQw4atB9i1u9dFUymtppRMTTVccP5eydiFZpQj61ijMg",
  "key14": "5fjU2WrgM7xX1BCHeANMPEX9fjb3KAvBpSyx8sJwPijSqpnL6GMuwynmw6ciyhEL1k1NUueUfd6XVcnCvDETdYvX",
  "key15": "5nSyidsyKhz1bqQbj8k4mzeWRTewvgaYfadrQJWcQQAo2ZM7BUYbdVZ5rNzBGhU47XgUSKaCRoqQ2gc1PiNfgj9",
  "key16": "4y8GpMpUaesNkaCyif1hB1VsZdxMPakGZTYokQvfvcRkmELBiwYcrAHQWhvaC8mBfRFiCUXpMDKV41QZUH9nzP2m",
  "key17": "3V7rUjjtSsBNh8EZwb2b3JpRDsDNLGXUsUikchYx7p3x983xHf16haiiDHXuvTBCuiM1ANEqmqTfek71KrCzEo8h",
  "key18": "4QGEagucbYuAFWs761PfxXfQBp2ov9udxPLEjKaEmY2xNSZqNj6aqw8D2NUf6uEkrrW3tZAhdWjDhuBKfj5HJMkz",
  "key19": "5vUN69vgNftEnEibkqrRBAc6aLu7JKxUdKBTFw3JzxaC4QAZUamRQFyse13Hk1quGjqrkCf1ixa2J1zqCcReMSKB",
  "key20": "4SBaeQZLioGPJtKie4D6zcAWn1hsRqBDhH3JEUB6fP6cJSkwPSD7jiZPWVq5BS2ha9aGJMEamGxdP5UmA3dyLbkk",
  "key21": "hQKtGtQs1pj7p1bs3wq2ZVDtzMggBf3PdnQ6U2Ds9NqZ6cC31MBJYnYAjCEJXMXNsQY63Qy1NaFf2aLQNytWyV1",
  "key22": "yJh522eYL12jtMRWtDdbnF5DNrnFNLFn3n6d6yCuPw5VkJkUJj4ZoxXqE8oTLKLGHVo5LP5e7tGn3wGVjnKqBHa",
  "key23": "MVm3tPusu5ieft12vZvByTyup2LyGJeuzQBXr6A7QAHxCHoUyAzsVqdGEEzzwALVoprQevqNJsynQzdkHbQMvvX",
  "key24": "4iL7KgFCufdds4RcmTJuqp7NCgeVKfpGQhTRnj26svkTknxidsiVVAwHPepepvqUQoT5ZU76SNE5VsGzwEJqJ1ph",
  "key25": "2KaNdosgM35nxK6ZoVpmkHpzKgDa43VWfxWLrNvvBddTdrRRoH9jJS8AaDTHLFcyrTwsPhjdxXWfAMirf9pUwRXa",
  "key26": "56nCZk7t4BxhpGTEMCNMnwRhAKJS9SN2VCc9FvVJhrg3hCM7YuG2j8kR2WB9FYVPm8qY15Nbdxd3bs7L1PDuQei4"
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
