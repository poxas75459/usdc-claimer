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
    "4BqoR1Hmy7PBZBSAhJksvh2PRMNczT85FhCDKe7m1LEwkjmhw4PAkH8rgheYMQx3kjw5JPA5KmLTvG2qui7vMrxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rGteeS3ouxNe6KmaEQdr1R4VPC8DuEBcnzwKz7dsvUod8PrDhn8Q2rUquAc3n1csVzpTDyP9iseNvqGVv4rgrJq",
  "key1": "2kyfVeFuFTFxCJKUJRxwuLeiqtWBF7kDL4v3jgKxFTtzMfwvPjCTWmshUtooSeECdnnhWHUjLE8M4FtKXP7pjDWg",
  "key2": "38gD1xDix5v5GKwSMj1HLBuSthmB3zGNypkakhwU6HFXBCDMrkPdrmXi4JQU1rPDTkDYGXnKMgxLG4eAQU3cs7pK",
  "key3": "4k17RKJC7vCwjDpXmMsaykzUy2vABPCd1NeDNkXK4ftUxxvXDH92r5gw2P1cYr1mgsQG8nwJrSJHVKBZsicj1f8D",
  "key4": "4wa18XCDZcihkRhFbqdRgmZqKNka7fgRh96fTgwFSm8b49qvQYkdA6YsCubsrnvVjGCkcVdYmSFUqeQkBJU6VJZB",
  "key5": "2Lr6w8XTrjE5Xv7NF5aujkjwb1XF3L4ZBhgympoedaYXKVoMEfFnUBY73XE5u9m8Bn1csjDb6c5y5aHcbD19thg5",
  "key6": "3sJsu9mZgRV13RKZW2ct7FRvFaMnRHpR2uFPeGT55TTTpqczpxPAdia1kk9XdoxyvZH8JXXZM4bkzWhEc84QS4Hk",
  "key7": "35MNxxrxzH5mLpCu7kfch2UXwHRCRqwmHVAJFToQ8ozcPkhMcwAeEd8peKfsvShUSZUYtFcfNnP82R16fKLDvMRH",
  "key8": "2rbjnb8b8uzf19P9jqh3MjAbTAaKY88dNy6yKQkdU6LHENaw5Yku2x92oiBEkcDppxgjU5iB8RNwNErDjNkvT29",
  "key9": "5GowNtQmJ3zAq6kn25dPm2w7iPKVQmUVkhZYXUkZ1WWHCKHhnMUKH7prkwdAPEemCPjfWD6fZKGuuwtTCjrSV251",
  "key10": "3QyKSLJG4LshpEhFVGdFVh1WjyQAD97T5a7xePmZJsvR6Y5ABeVnGNQqqJzBoFk6hpi23aNHjC7kmMGNhnTeiMmm",
  "key11": "3u7sE9GFdqLoM4xgfxBBSug35nwsBWXBFB5pcPet5TMXCwGwigq9JUG5dYxDWx261DSmSqNE8vkdhwhtBjw9qYwd",
  "key12": "3dguqi25DT1vr6iVGE8TE3z8Jv9Vb6hkaXLjPEhtypnQCERL9Y6mPhAwiF82vzzZScmtR8T5oDRmPQW3LjdmuPNB",
  "key13": "2bNZqkjeXt51Juyae9KniLkBUiTQjTbNGKSR3aswQvtahVPZuGAugSYbMfQ1cToamQNtbZqBikJrvJT8HFxQSXEz",
  "key14": "4XHCCUCizYoerGTf2W6vq2s3jSP6LLTkT1qPW3n5j4hN9MXCoJ26PhMXhKdrc1UTWfVRfhnhnkLbZ6fLHhREbkgu",
  "key15": "TgLNGbaJEchF2MdcrWyMbYoBVQjBWkpfPC2BPRZQqVxJHF5rrQEiAb2nXhiJMHKhEM68MCQuZsXP46MugtJyX6X",
  "key16": "5mccCwuwLgyLf2qnW4pctyEo3F1JXJdH2emhfjPvaKmh7aKiUqzm22isYcBmsJmMQSFHgw9P35TifRHn17Cnj93o",
  "key17": "5o33FmbE2M9N2Agdnffzw4RAfhroxw7aQkLnkHXeAtAWVDY7Sxga8NLAEyKVkavL8YrPf3VUkmwuSTzcwnFe2ACL",
  "key18": "9Z4J9YsztTY3XqNYTTNPHPdLp2Nqk6AJNQAUdcPSfMchddY72Q1MrzCfRLizdDKuzSMmUQhUGWFdwiVxAS497qV",
  "key19": "29n2xoz4bednU1VXgYmLuMs2e7EuxLFvSVB3qY428KHg1h2oyqqrqfqfubSCSWnzZCRgvztytMEPtfztVUMYGqbX",
  "key20": "qEMvAMoWqMimsjxTE1MHVKZXwFGTbjL4pV4yxLAjqdN363xNethEUkiM3RbXqE9emqzxw6bVwPiRUzksa8r3ZFA",
  "key21": "HmBK3bXHFJHVwc3cEwNGs4iK9JqQ67fZ2sbmutNbBYwigGoH9Myjxbc3dmR5pdkxZ2NHNHSxVXEV6HQdjxLzsjT",
  "key22": "4pxMyNgUAUUkiCQq1ZwsTt29kiaPw7jQ1fzzZGu2AdQTZwDTVEky2942WYjs2Lue33AU9k8WMEGGpnKiVwXAEi1s",
  "key23": "5qRFFUKsPHWHBNkssMEytACq29oBufemzUaNrLpfwbm4jNmXnaXLT9o1GSeoCfiMrA45UENKtEiuuNasQT5CLcmt",
  "key24": "2MkyHpALvAR5pdjPRXWoenvHDFgypfc9KHigVEYTkwBqMWyu5DuBojoVbbTgbjEZQwaMKvHAdcURbbbjij8PazZf",
  "key25": "3aRzWiLDRcTwL9aJNCiCVTTLw8k4FCE77aqnX7LdqxtbY1Tmxsjg5YBpVzKERycr1yBfijWaWy1FENe9uwkZopw6",
  "key26": "4jeTKYRxW4acYKuaerHxSCASWVeNPDx9RKrdPeCrGJTQniWx5zGQE2SEZtphVDJyNc388Ab95PVw9SGHrrRH5W64",
  "key27": "3MMudYVFrmY55ea8r6CDe9cqWdZky454rAzDezryja3xztnkhysdi84BApTbzowRf4EZaujGdzg3rDWYRiQHWSZW"
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
