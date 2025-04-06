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
    "5TaFNbSG4z23DtohVHTW9XpsfbUxJvUAT3sHEXRjNaqtZAx16CjTD2LHaXHMNUb5pred6AgQ6PYputmKboiMc8iX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfiidVLCkLVgDX8sendiAxuQ3KoBP2xp7SLBo4PGmkf2XBGPKhwqK9E7Chr4CeNeGucAQ117kgmxupHSpzj2ybE",
  "key1": "HRza2yAcz7HvR4A9rHJRX5TVp71bm4vvC6kQid8iheRjd94CjtesYJ54zWChHB8HhfwzbeFeHCB13kosskWbKnJ",
  "key2": "4m72UEgW5Syxdkqb4Mb1cdgSvBrpBpXPuhu1456r5DsUf5hsNRurMXncPeVALg8ge1bQPr9AMdkaGLhwV3GAMqyV",
  "key3": "56UFSCx3biSQLv66AwJ1Xyau8p3uzVZXLqxjAdW2zEch7EzvKFWA86JDpDVXFYDxzun3Ayo3kzdW9c5H2HrDod7P",
  "key4": "QxhjhDb5v6VSUbt1Wzv8DiQ92pXgxiewnV399zwv7czFs6y7WiTRD5xJu3WbpNXMfcFeoog9v2PgHawariqSwnv",
  "key5": "2PpiBeWgZ1p5BE6KQ5rSzU1goC1n7EwoURukAbPUMispCfH3Ahtmj6WPf4EL4u488pGRF8he88ojDdNn3TspPstM",
  "key6": "38ekkKmsGktAmRQTr1EE358Gm2QtwkiciyDdqbnN1huhst6V1rZVHvKeGbHsW4JwSQjPFkFw8jv8h6aDDVCneU6p",
  "key7": "3D2eHtqYQCCD8PGaa3FVH5T6Xop6FCRsfoTuHWGJtPKG2GGj8zJ4YXpkobrXxdUX41P6u1PhNJTexVgoyFqbgeRe",
  "key8": "4KYoxkwZov3NZHDP3xtB8ZUyqdaVfYPbELTP8F7bL1iGbAp9v9YWS5ovBF592YSJWv1dx9VwHw2tKqYatCWa9UBS",
  "key9": "va7FR91qxTzHii24KmWACCBX3YTADwav2W7AYetEhTct79S8bYxYhfE9NQHoEnNPv26FPtxEVHCWicyFV4pW6C8",
  "key10": "QEJhAFbUnbhLg1vrHw9EYpS7BtS6sq9DFhHBukLXTGjAwk4bqhbuwc9UtAxjqwvGiqGX7nKsTHYVa91qw81Ev3t",
  "key11": "3NfvJHJyxryodMrQ5yZEA3eN9WJmy2tqk4Ty3Hdd7RYgrctUuEah7Pd1fV8jp3dwaGQzxUayKUu7oC4xA4UbW9cd",
  "key12": "3sskVjSFojtAn33MNBkEmpv6cVoDsTSEf7nr8qgA3dzniWwXddresX3GJUCQMYa3uLzy2Hzmr5PuADeoNAbnQJp1",
  "key13": "ysVVe11haaigYr4ySfddxAYftQmG2DrFnx1wHtvbVGMny5pNMHb4vdmnbiMgHqpGRY4WCWmqQzAY75qo8NcdRDm",
  "key14": "4bbcHfKQLsNLqVTrNPrvnHp5o9MPDCqMDomwcL7cJBtyp2ma7Hk61DXZL3KitYukoMcpDXnhj3Ao5DwbSSVL2tjQ",
  "key15": "YvVyAprcdQcSaM3HNEcbFhCXZyibSE1qjgpY1C5beA3Jui3n5A44VWdGNM5AjJu4g8kHtYcqRdpmZKUpu27QR3A",
  "key16": "3QyB6E8MmBDAESd3cxwngUYgqAyJMVNNuxafdS3q5mFJwQLodY5iRjTGwF3JmabZwNGR4Q2XCWbMkfoVMYgcXzKW",
  "key17": "3mrhu6w9ydPXHUAv1GC4VJmS6UYqFcNbrxTwNK9MQkmdWQZbzmtQ2N1U7VCrwGtdUaqgbrwgp862vPc8Mp9mnr47",
  "key18": "4ctwdn2UoUp27EStWQGE4ra165feY76dsdw7bnjdL2iPUVsJKbvznrDzsKKgHG3gYekiqsFUFMK4cMuUaRh3Efka",
  "key19": "3tJQ3fuskcQhnvqLqxHmZ7fAEoMQZvF9zFQaYkgyfgmQkjWzxP9vtVtrcwhagqkR65osbqqpeHhfrt2dgEaSoQYf",
  "key20": "4urHbV9hs6GzRmGQkLHMmbv2RXWZ9VVU73QEDB381QPFNzomE9d4yS3YDBPJcBxb5HhFfHZzuoaKHicNKJNatiMy",
  "key21": "5wdbWwsyQb6KnWMSTx4jUJam1EtFyuZ8koJDR37K7Jnao5SUMRm5sGBLtcwnszqFw4XNTWDykpvKzjFL8YVRfaaT",
  "key22": "4xwmF8g5Emsev1LKx4wCtozUS5xCeaKbADF771Qw4cFqwNtMgwNxyqfD7cQaruYPWQeSX5HfwfTy8J62ft9hnnad",
  "key23": "2GwSBY7axtAohA2oYjPALXaMnAARhsUzgGrQXCuhfq5TvzuT8HqFFXvFJUDRBWii8KXCUL2wj1TnPZyjDjrfraVi",
  "key24": "2JizsmUeLgtBE6wXiwWzquEZ7NCXvj75FfWG9JrkLb5T3XKdyGxm7FsR3p98fk15AYsudE5BUaarm5v4ofTvNbL4",
  "key25": "iRPC2nhrdTSZPpw8MYiheLQj2r8ZL3WFUe1Sm6hnWH2p2TRM6sWG6113xA2C52masVa3B39isRymN64orp4kn4r",
  "key26": "3HDj3qnDkotXWt4ZXx6E12wEqQMoV4J1MUHV2xS6bPGiaHtxR9mpqtSwoPhaam1HHcGYt12JmxQhsVbCwGDnEp2e",
  "key27": "2Eu7k9Kt8aDB1CNpf14UBcGo15j7vVhJwxGbi2AE8rwwY3DkqkNZEztuP6Daij4g376SoWQxQDSXmVico7JttvW9",
  "key28": "4Mbcp127BE5AeqyD3idriqiCR4VPdsf8ozsxmKNSnTxjkjdxAYJ94VC4MDX7QkYWEHH3sNnjFVKofg8FyK24WqsJ",
  "key29": "5XxhbRDyJMPSKFGBqbiDZQ3Kcp1SMGA46BgRiezLMmRKfuZ1gtuReRpeiiJiCrEWAvVU6SKn8MJnGhk9jArYCeDP"
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
