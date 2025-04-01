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
    "2LERic9RQjUGtTP2FsSKTbbGv3CdmUFqRMh5e5h2i3jGu426ZjHaTh1FLtb5mVMBGLgK8XSTELADHeFuwPjK6Vyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61FUE1S3yYPxNZAqruGQyUt9Qgvw8c7y2PL9eR6raQCzfbmdT9dC4f6UUQFuC7qNyhWgJUXLFGnCBJ3EWX7M7qpj",
  "key1": "4DoHJkvZesnvpX8EtR33fN7kUyeQ5fTRm7castLkESQYm4mQ5cGmVJDWz8jeKW2z7z7gwosnjXqWZmZJ8q1EVR8b",
  "key2": "2dV3CHFdTH7KaasAghNfCHiDWSczD33F9VS75GjwwLCbyHjMtMpfHb4orpzxV3ofutvYmAM2MUoPKnm1JJzoYgtV",
  "key3": "4nHLRM694R58D4sBPaBonHyRfUso5289tDCqj3cg9LFjHHPFDE9bv8VaDMfQX3hcRomUijSYg4CutskXmtDMe5mX",
  "key4": "4NZNw6AvVvox2Z3K6C4Yratdxajdg9f7mjdkWWeb7LTTYNeieQs5ntaxaXKxdARhQz6Bymc6nUGTUR5v5pabVEwd",
  "key5": "3SUcX3eZQEbRh4Yt43Gq8zqCThXtGgPi5kJL4hvDLSrrsVn4RSK6demg7bvLVaiRhu3sHPuhYMypaQiruLmfxdJZ",
  "key6": "3HMecAoApsshJySGn586k8H5xpimrAU6gUb9QvBbdc1Gu7obhPgzksiWEH38krJvn5Bed2cmczzDMC6J23CK4i8x",
  "key7": "4Bi29URx197uHRMdzYyBPrhSuRBEQ3MRMVbLrbYFAMwHwddwnbbtng6SG7sRibBwTye5UEGQfgWaneLrriUBdkGA",
  "key8": "664XMSVU6NFJe9zE2SzgZRVU6bssSsShP6VhhqdFTukaFuGtKag9rwsYDmKb1rjjbL7mQKcqSurcfkupmCEoWMjH",
  "key9": "38Q3CGgmCddegQ6QiY42vVtkPAqoagGwbcFUj3tfL9ScrXnbUFkwAM3hGp3k4f8A1ts93qxmqwmU8xRhjCsPBNSo",
  "key10": "2b4bBRsBhToHuGbUERQPCxDqgNi3uDZwyYKaGhckoXzHY6TZSydXK9JMHefCgTkhB7X9J5emF4dXXxbDN8cqWqoW",
  "key11": "2u6y7Qn1k7WSxjrg3JJRGMjtWCvfENBwJu2B5BH9iHc8yVqcYuM5HxuXoVgWLMbvG61tk6khmhAkrLit29sDuhok",
  "key12": "rMZ6S2tzJF7BjdYDF1zCTMGxG669wvwJ88EFsW2u3r4UgazFQxA22yQuJywR3YMyYiNXE9Dqrp6H3KjxcKBvLg1",
  "key13": "4gJzLAyJyGc3ct4x36YsYTDash9YcpcgpNjTMnytGiuaDWnnUubkxkoVkGKTSqnhSswdWS6CjSsh94A5zQf526bK",
  "key14": "vA3xDoJp8RojMX8wsbEFGhUCb1SuoUJwZNTcxVRKioevqgqzDmJLFikSiHceBGPGu83guYYPLxhhSENnKS6TwR5",
  "key15": "2ivFeqmz9p8wS2X9GxmVR6NJfquhByJMK7efRhfVMemMqqEvdbYayW4hgFSHmYqTCpj9j7e4FZDxqJ578py8562y",
  "key16": "2S4Bi3rhUX36b4T2LvYkoXYujW4xX1w7NWViPn5hC9h9LjZ1hTwhFN3pkksHTmFoQRp5R98yGgWUvM6k4tRhTu6g",
  "key17": "5BKtMKkpQXPeT81D8AFmsZ8GBRWkeHVhnGhN9XRvCbweFJoJoPFDiXSEpGBEvPoJytf8eZ1sNmLsoya3io1Sye19",
  "key18": "58wGSVdCNyuRNavVGQW7GTr98EPzCTqWzrsNePrtQ672NvLSoDpKTJECQrZX4GMVm3KVnovYvNMqQCa7B4HbXux2",
  "key19": "5qu9oisEMaDUhsh2aCtddR7i1M2XtL1mDF6sqXk7us7Ssh8sZtJGEhk3oyLfzBXDP31sAqmjQgehYD4DhYTRa4Bw",
  "key20": "QKkmvwDH3YNnZdghiQXoboW9eKpF5cmmXpXzuPBqe2bfMCv279rXj9taaDqT4KzkFQho18whiTzgp97uxGU68PT",
  "key21": "2v47k8VqYUzfXxV8VTvto8oJMpg3GM7kYxd1oAi6hNLAe4As3JDZGe7zVdv4DAnyjcMcy41venaFdvHTnX7JpB14",
  "key22": "29GPWBEC29o7fTfrcvaRAo45JxDdhCzAPXfntKCGXpP7HhiJwWfncoPaZmrjJLeEcPtM7eZ713pfxD46dqyGXFb4",
  "key23": "5pELErYTjb8bMmckubznXJzXZ1iQdN7k5ZpRvyDqYn8B9R9PDhMXfsRS1JE2RephAAgmJoCR76MrxNXT9YWBgyEV",
  "key24": "4HUrYQXpw11zkL8uoV88k8sWRDUVAxbahDfbUyTmNuecFoffiVTzJPKX58kC4jnh8QjKGJg7b5H2yaiw7FMp4iRH",
  "key25": "xysmcwE41LoforBMMc23GKTpaTgqzomWUmpeoVECmk9HPkG2znkv2XArL62PCPKFq9GxUeJZbG2ZLyRxypCvRYf"
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
