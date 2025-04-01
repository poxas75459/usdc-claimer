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
    "21ZAuybWciQu7pCUxCbDzbZo53s93CsYiTEqrQ2xEohm4XRFComzpR6eDC991yTEhbmtUVfw4iM4yZzFdcfFmcEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ahwhE3KxpzCiJMpEW2nLGg6kHh7M1xZgX8dWKzPwXYckM2E2xviEgCmCP6rLLVSXP1WrPJDssJuwDymNsReLRG",
  "key1": "KU9ZuEWZjt1jvCZzyEeLGU5uL9m3LsxQ1GM1RC2cRrY9PpyzHE7DWTL8XHNSvQ8TRqym6nFV5R4GHjF3dtom98Q",
  "key2": "3zxbpevnkJZP1BwaH4qFfYoGDzhWEGHaUrURHCGzzLNLhCUbS49TaEckLu6fnmMHVnNc8xTd4KP7HTRPmqtNBSwN",
  "key3": "4cky7xcnVwYHhpdNCMw2gy1aVsr2FEdGo16irhWBivYZ1vitQ7mp2aioNouCR9bc7ceGbo7368MRT4YHrjg9iVjv",
  "key4": "2sogXQZ5EEhN1RyqewBLkt7nWK8RcsDzyx23nhVhQ8icqKHcGtXoefRVnbyCVwHTBBJghjDXLy7vaJpYE9FDY49X",
  "key5": "f34EeL2CV3MxtPipzgbimEyRzmo16G9hTtYJWHkdZLUz8Vyh4jPfFzDFoFytsjfWFT1DAXfSAZhK9C4Jw5RWfhp",
  "key6": "Rr1eFDJnwxJgckiyenHo6yWtxHP1QU71fQRBMTQpyfPgCeVPGYJyYzAjvQU3mynhQrWcAB7W2tt6eLYB4FEGTcf",
  "key7": "uMGQSua7XYhpnj8JTiZPxaYe1yamytXggaEpkvM3q8WXxq8FDvMz19ADvusrxwUv93hMu5ygrANUMq9X3rym9ay",
  "key8": "5fuHCP3isPgKADmpb6XdtQ9G453i1kiVdT1NCfqCdU7vxEATNLECreUfwZ56CbbuywYMh5Z7CcdBxuMK6DcuExnm",
  "key9": "5E4pRPpLWrz1hC9jyt1d6C5EnhvNxatt5WWsZsDxcCFsgZSYjRa26vKqcK9WBaDozr3qKaTFHLmqaT3cSnyUeJBQ",
  "key10": "4SSjT6gJAkFiNGvXEdNo8cBSVYfPjegpKTwjr29R9tok8SaunTAWauZ8SNgyfhLzo27L3PUf6A7SnGP5AriGhJR4",
  "key11": "2p6wkLJPTAVgUSUy5B3qLJZLvK4aoE4EkGgzQ8M3D4G8vQ1PAKz9AXzyRmmd8ZQURua517GTnp4M4TWkbgRAnyy3",
  "key12": "2UXGB5eVDS8vcP9QcSo3jmou4ZjD9kac6sKX9YBS9NxfCHtP32XhrsvSD2Jb6iJqkCejbWqNSMVvBSKtSeUFTRjT",
  "key13": "5JRfG4iH1hBDBH4atgPo1ejAwAFELMbc5e2UDjQKQV2FN6ybfPkjic8fxe8BywDUd5Npqc1VYffAQCWS6pUw66WB",
  "key14": "4BToeXxLALSTZLJSdSu9jE4FgUxGjyEbQXQwHEwdnVPpnoXxm4Vx6vdhnf4qxTWmL3AJGotqouuh8uxu84Jz4mmq",
  "key15": "5gybFdps9qeXG15sDEJm573hzRrrjezfcwoziHcqAU8mt3s44gW3vLikE9tmdnGR7aGYPdAKosrCbBsTviTFQcNN",
  "key16": "555S91wpevRobsLD6CUbncYFLbYMyoxbN93gHMUtsq85zXTLysewuEDEtSydnJLbqQLoRg2qXq2vcsL6ZpbwvryM",
  "key17": "2Ub2c46tVHWYEK6JJuJ3s1wViwVq642BHKkrpnDdrydQWdsD7pWY1fyiijb6efd2z2K143oqhgoAp8sFBpRwBcXh",
  "key18": "4eYJwdv2hkugc5yaiGSHMuQki3iKRjrN9ox3CteHTBYf9kCgabFimeFZUqywUoLZKhiLeRFdM3djAk6U9YZycDr9",
  "key19": "Gq6AEfCBf8hT6ws4htjzyqEdvwVfjWioZhaJTUnBp5X8whErKVeuUSyNkmAnr75cLrERKNauQKphCHgM3rc4nL8",
  "key20": "3wVFMJtsohcDnsF8PRs5N8GUprYiHBrzJWantFfKcnJ9VCYytXs762jUb7AWbxM7UT9QtXvAromcmijroDmcjBnm",
  "key21": "3XLEweGySV9AUS6gFvu74S8jQojNJW66eTr7HtmFdhYR2dGnLe2J6uuPDv4dxrXBrKJ7N2ku9fw3ZDStaFxEk4pe",
  "key22": "4tShPcDDh1a2hYSro7VXYjtEHvvEo7o5qq2VdXpXbqEHYifxggapawmMhA5i6qhCDWfhDEwSx9PFEGNLMoBy3i5z",
  "key23": "3bgNfZoxYQDfFZL5NHjNfXQtLpcPmvZ1iuf1c1WR8N76FrhpJtzJHY2R7fUFdE5p9m2XTngmGtWczqFL1Pzd5kFj",
  "key24": "gPxamAamwXVA6yAsPeifKh13aKduCfuccuDLa6o6zRaNsKxDEN1MmCra9AGBG7WE9QoQyBigGadTvP1KW237vrh",
  "key25": "5CEEnu63ocR9XshHjvsTNtN2Mc14TdcwNxyCwXPUQrLneBjnqSwijo5WyYXDPuzgcjpuGTnZDKGvK7W8SnxTG6UR",
  "key26": "657ywiNTjzCFpqqiLw2RBKtyXoweePS1KyPR7qvEDh4dKko4ozkowiGeZ1Rkv3Wd5RsSwJbYrJ2jadVye8AJesd6",
  "key27": "vMkCAARmAmQ9dz4EagVpiLHk3Qdr1kkwwMRFcxhdJG6MFkusamN2cH9eDZfBstjsEENqpanzhVgisosec5dcTEi"
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
