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
    "4VFpQfzVNmdE7EzC2HQJZQyMPbzfcQ3eUYppzT5SNDs1XSBgqbJDe4ybzPGBgg7C8X7W4jybLtxN2CKAJx4TXfeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fbqdpEku5BnykegxUsSEncNK98CJ2LMrbSgbGmKdimNUYkqiz7rE4kdr9i5tY25E4RYt7Q45LrzGLi7jiwD31gM",
  "key1": "4KEP4M7bSoNiSHLnzR53jZxCXiqr6rrgofoUGcViBmSWwrsm6ndYH7xSAESU1SgNA2Gn8Gs1gJRsvMSeGoLvCASX",
  "key2": "HtwcrJfPhVV834h6jaPboiDpyrPSGmdYKY5u7x4kidKxgWU39izcejGQ748wCURA5hpRCwtccrbpFGQwS4zDyhX",
  "key3": "5QCscjDteL9r8kTjRDyFATHAPJ99Vtmk2sMbCnJWDzsjmMBfGSjMzCiNxL1rrS13rf8as7xuvYLgXDaL68uDZ98f",
  "key4": "n77eyHNpuod9VZ7imdEMaEmmEA2cSmzQ7AeX4o2cvtu3YmMoBAP2q2SBPPKdj6beFRGRcw21zkxCgEpBvZCj45J",
  "key5": "zv5ukwqphoKLeJZqUez9M4XizmjkgujBXJBG663x3QGuKX1XBmZfiG3gss6pWss5mLt5VJ7weR9ssaqia2KAsnm",
  "key6": "4FSq2oh3uxfjExAwo8LUw3co9k2HZFPpfFJgqh7fXHS5FERCXKaLFmVnUuFzFnCSvJ7pbtC6J1tNXuQup2FLuGBH",
  "key7": "5oDpEwPji5k49AsghUZsSd3SCkCnebaFni4JvchYyxLgz2gkB4tS5sVkcZpw4LerNbmbW5roqCoD2fyt1twcR95k",
  "key8": "3MdUYsJYx81kuTzPoGVV1BZ91gCw8K9tsJZwhfaxxGRQPqh5xmVqQhcMzzct56uQmnxpdPeL5XX1YwY4C7Py9m1V",
  "key9": "47Xm6k3vHt5S18q9cZvDaBJx1PrtbT7kAyzAdD2yYoSaQXziJLFtMhVov6LudHE3W9nUhSpf5NynDg3BFxZr4tGA",
  "key10": "2UfGe9mk5LcnWj63pASbuWC7MFDUYLuiocvZkGRYnsqBsi5qkq2dtgWyp9r9DHQnkv8LdeDhLfHNxsKv6sQ3qUzK",
  "key11": "4LBBQzU3zEk54rnMVeWvg23EBu6tyPiTp3QnBoGNXsDq3wPRDnprpkC1dUDLgCzVEJXfv2agufx1KMaEVy2LLja3",
  "key12": "3x64XqSQDiZ2tEXXQL6zootEkfGksVds2XC2J4tGEg8LnFhWUzx51BLuQMZTMgzbyEeiQTCSo21YdYmpzJD2PriV",
  "key13": "5G6Dygm8f2bkdTqzXiseoCouABeozgMoPskgcgZpESHerzQBdT4dQjQvAjNZzsdkGbU2VMBMW5NSHVjazvusqiZt",
  "key14": "32dhsdaZ1NbgeFzJXcY15dF6KoUT5oWAFbD2UVu9vT8JQjjE8HjzTdnLk5FsLQqrz71CGYCc336ambzMo4qdwp2N",
  "key15": "3GXWrZvyquViVv53BZjRcfpJc2H5ijjq3WBafvbHAVCT3eWgBYVgFbgRouWkSvVoVdhZcWmTjAaGSaog7Krwe839",
  "key16": "63axkKtb7Z4tBs27q3VCo68HGfQCa2tmfPmqY7rNfQtcnRPDDra5PNteVgu7r23DFhrFZfC91dE3j9v5J7AdYq6T",
  "key17": "3H3vqEE3kbfvrL1hA4uG2dXwVHPYZ121aAV6atrH7PXy6ZuVdaQPmvoU1kJtriDrNjcyuxi7SHZEHNuC6wJifBKH",
  "key18": "5SYfD3AfYzdnsG8S5uuAgt11ge3dfbFZvDMr7VhJe5zsQgcZWa74NVrqzR42HxceNDUrCRB73f9VdRvSiK5bwu71",
  "key19": "WAo7NAR5rhYcuE12q95NZA5RmgZ9Sn4K6istyDCjz8v7B5UBk1sfocFzGhxxyNVoRPgbfycG92KhWTXSD4Bxwfx",
  "key20": "3UUJnyDQxAmgqXdbgE1de9d4KJDra8znb2zcYbA7vNx5WhdBXet4EJnvt7TG3BaizZyf3qVdTAjeofdN5hVejfXj",
  "key21": "CSSwkpdGe1Zb1YtCUc4NwwG72aJne2U4YyjVnAuKizmwqRrKbJAjbwRBF8BPhYCVeBCo1dkcNwcvtxZLBiQXBRT",
  "key22": "4g7SyquxFTtH5qTkRbrtDgg3fwzTRPrCaWDDu4S4ULZhUDGeTAjZEXaS3veZR9FycJBsM4n8oJZQ4AJ6Hsz5sgqD",
  "key23": "2sTUhwQGQp4QLtd3tin7X4V44EWWnkP9mDLjxC5qgiBmDDPDTb4WctC8aHnjrzL2rQFxYXeuyj9qEGbjYkgGieiH",
  "key24": "5RUzUH6DZ3zPAigWr7gYHuEqJktbLFTAac9Hert2w5KTuJ69RsVyqGw2D3XgsxUVqe4UbR1phCLpJdj6c6VkVw8T",
  "key25": "xSE3w5FstxmwTczAo7FhBCao5Z2ebERnwmtM9QiyETLk7VUZoW2nzKAgQ8kbqUKiV2jPKR31NErqv7aW1eYchqu"
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
