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
    "35yde7PFQXAUNUS9DLaJ5Mkhy7T1vrHopkaF3tJ2ncR7hAKox7wCguSGsBcc4rym5E3rorMSszZPhtwXJm9NiAym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rPQL2Jrb4KsPVvQ5Yj8rEj8vPD6p6GtfWScvR44D5NGnUzgfCoExeYeQveDfNKiUmiD5gMYm85t5XPQDQz34xYs",
  "key1": "5px8p7fLiy8gL9YXHrM9mcqJfQJnWAWDJpq8QrJrwZUvXGdJxMeCxeT6wZQKAq3bpXQYKxeV6Y5atrCZHuqsw77o",
  "key2": "67fquwKsRA9UmeVFSWw1VUCR3YwKbAzA82CsZf9LPDrTYJDnhPJ5MdoyGsgpXQnMgogJ81oJfPMs3Ka5cD3EjMMT",
  "key3": "5wk5fcvd6tBA7aQTZLqypRJ4CW4vYWqLw1HKe3u9fpPkVpXSzEAwBF8yjS4Utsg7vieGNb9MJcWLFSQ3rc9PwHh8",
  "key4": "21kKLTiPBVFSzmApr7KyR53XeQp2tBEh9zwefvMSXYotE3VQGqoagprXe7weNhKpTtGG3xUmF84LfAg8BUpMa4nB",
  "key5": "Cy89y2AXFSk4wbrytkRTLWxjcdHUhajwcF8jpGjJHneJjou2ws86fzYT1SuQLQB9ntEXo2M7GbMgmnc6KDXqb8e",
  "key6": "5VHajXxoMVfnK8xTxpqxrg25fwxpSyvh4D3jqr4hmvtNh6Vd1b2QSDcZhzPukWN3BnZBZq69L17zfVTc1S9ka4HV",
  "key7": "55sCiyscCCigSJNFxSs9zgwTFMxQX6VtJ1tnShB9D7YLAB59ua88hC3s2vf9c9iNLxWaMhYmbNakcs3vYa77SyFT",
  "key8": "5t6ESJCJ1M9PKDpM7RS1DLZH9SPgZA9H4mjGmUngHkFuoFLwkUYWS1AqyAQucUBfBoMCsA3KmBUQf19K32n23QM7",
  "key9": "43Sow4BMh57VJDPvkNdH7CrgbR6FzC43ayh6Xb7zM4ABpRMDUxhf2XZcm6itHR5yT9az4tJWL2gZFBdRfrt6tc68",
  "key10": "2tjVcPiXy7JySqi1QcxoGjN9q9nHZeCKnfHUhxDGV9B88Mu3mZpwyoSi7zcVYqRnu1DF5a9nJK8GrYk6wfy5qqqV",
  "key11": "26QzdewBq4sdeYuEMFCVFrRD6KNfCHNzjNAkbGevtULZE6gjWu8UvXyWVqxWc9tPvckP3dgCnh6WFJRFuoEmUpgG",
  "key12": "43jhcfEZ6ctEsUPS4pzRra5njzH8Cq3z2JHvHoqsBbqab9jfgmNwaSoqVgMRJdV56BXD6sShpuje7ygn47xszR1R",
  "key13": "2F4L59XvdLW4sBE2NsGrg4EfSxxtkh15dMbjUeTuRKLfg4ZjzyEo4EdY28Mc2pEjFL51QB5ArkaTHphMD7UdieUP",
  "key14": "vXL3ptrgeAJwvHKyUGBsx3duYmzcCNqVfveRPJ9tKaZZcTLtGaYWHD6eAVaHsRutvVtjLGgaKHFNwk3hxa5HJZF",
  "key15": "4mEmyfs2vRhTDmvWkNXkDbqYVL36gvh4RAH2oWdKRHRNVTopyDyfMLPqgRXj1nfqd6C8d8DfnCt5Yca7WfeM69JG",
  "key16": "aJ36kkZGzSjhdxhKiJsuTKEeMu6nG8SMjVmDfid9ukFVy8p31H8WnWEXiTt86b8jYA7UvtmBcQJ7ko6gHJcqrzq",
  "key17": "5W8xrpVPA7Z3qUgvrpTiLTajPJ1HUNS7Ltsfa9uuvzjtiHghgmbH8v3zS52kDqNzhM9t15vHPGUzoPRExGAx74vd",
  "key18": "4iBL4oPQQqpdReAKNtLsfMUEqsavWYoYDzU9B9oyddFrkfnjTjGMZTggj2N2Dj8U4jCqh1u3Bz7fLg5xGUHhECqa",
  "key19": "4bbtMTxPifBxs71dTtE9LiEqUeGs3TcbA2bW1gPchBjEEMxKnRtatLs5jDPpH386szCWUhSAxC179LNyniBwx9HC",
  "key20": "5GyYoQr7XD4tQEx2tc4BXVmLFnpFKDCUFv6u87YSgWzBa5Lqn12Qwn8Dac43pvYv3euFcjKWLoddZwzc6XVeymEq",
  "key21": "2LohLTVb3ZAi95FpCKyTUy2tDHGFX9aswRsfN8FPnXmptYB3YJptze6WJBzth4SHT7uVpZNio9ECzpjQ3ZvntAGm",
  "key22": "5gLVKBMLvewhQfQrrbeJLApHV4WxJrEsyNw1CMBf6idoCaW2gjoogZbsXfBeQYmcsLQWVpjT1hDrYtX39jf8pJ3T",
  "key23": "24PcAXHQ9NVwj28mRJie4N2sMDUCHPo52bG7eusSvS8td85rBWP4zg3xqEZLD9rL8iQLxRX4sCgcu2ccbNp6VdXL",
  "key24": "2Fj6nKDnoXJS6nMShNDGjJYwh5QpLrwSexinsabTnTmqUGudf8hGnp9nJkFscx5SMzSFFNvsV55sSwyvueT9FsbQ",
  "key25": "VBAQ9VzYk5zGLgsE5H9ALEVDKe2XNrWYUDi54iPP153VNE2i89QEmk1usjGAHcuQdn1VWh4S7MyjPkUs5E7sjnK",
  "key26": "2UG8qrbpDxJ9uZRhm71FUfXZuWUdFQMCg7xp4iF7c8n6eHPi3foKGfcoVh7mNuAev5Y5KtbQ2UVUeBeKzo2cwCiv",
  "key27": "31tA2CoHxmqo3GBzhnfK9j63R8xPzb1o4qwtCx4f4Mp4qXc7LNaTVVr7WvNyrQES1iQFRoKd6sGjb9GhumXZvt2g",
  "key28": "4oub5iFnB2mZRiKL59ddTQiiZ1Btk9xKGJLNZzz9whFeFioGmqkp3QADjkg6E7ndTE8FVXVCeEce7tr9MSSxrKtT",
  "key29": "KHsgvvtiQvxCdMQghB4ykWouFDSV4PeouNwK5bzc83xQdsTZW9ZrbjvxrwZpwT8jLmpSC5KfijoQuvXDT6x61Pa",
  "key30": "3jA2piUNMAJUc2D3kQMEax6XpemC1id6uiUSZkFe8RTfaPJfYd6MLej1D48GfZL77AHucogyZVMwqFo71tzckKFH",
  "key31": "21cnPWJzSjATFXPQCLAP5edTe7d43mnKVhykYZzALDZrswZCE2uAYmFhFGP3LUF3MgDauFrtGrNwVsk81TKhwbAE",
  "key32": "8mMBYbSZ5xeZNz2TGgbpcnRPCNoRZTwhHFeJkKciFaXCdWJYPJMQMJPognA5vpA7kJkV4i86Pbt5A5dnfUw7Wyf",
  "key33": "5xNA32zggQYa5FRfVrhcRajWihSB2EtPWeWh3orh7SCLdkiaA4bYSiWrhBnF7STK7XqvaFboKtoDvAaem45bTDA2"
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
