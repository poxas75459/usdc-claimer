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
    "3ABo7DmNCQ2CrE2pj894isd1mzbqpFXPvpUfANP3j8NNqwXEuZsbd2tpY1gamjahsW8G1nSMafH38ij4LjjzQQGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CCs2B1toYyxfMGN8hhik22XPTBqg9u7UtqyKAQ61W3BMmiM3GR3jtmfhqV5TuFpFrYsB8aacp8rMQikEkayN2av",
  "key1": "2vLkiAyT1PzzkK3qaERyDBHcw6msXzQHfvoqEWv3cPJuVmouxxEZi6BrjX3cAnpESdSAWjpngMYp4edXXYd76oMA",
  "key2": "Pwn1vezHRWms5u86dptYxDQE1yX5GHK3yKRAkGCqV3spCg9oF7Tbfz74kuEjQ52c4317CmMewDR1nK9VZ7sbwS7",
  "key3": "4NYidkTNuc4nvcLmJSjBHqYyF7UM7U9jeif1tv85HxUj8iz4jp69VbXgUEcEiiiyp2Y93igfdQzjG3PFC2cc2Kpf",
  "key4": "BH3UxfKjmbanSL6JnEWxu1AXGSFTnpKmaBhtqPzZFz37bHUTXMChyG3GKBdXjNtxH5AHxfEUdt1i5Fia6T7QJhu",
  "key5": "3jeUjAmKS7773dqu2pLuJhzamsuy5w2v9ZoxZ9jaurPHRnDZDxuU86E47iET9uZmFx9mJeue6nNuJP3ovpzjMzDM",
  "key6": "3FMnDp69JwUVkPu7Dnv58ViZJBFsL3WEW64g2w7xXQBxQgBg5QeyBvt5r3QSY7P1Uukf4AWP7JUipQrGihLxGGyA",
  "key7": "43fo2QvFnSU2txY8CP8hbSdPE2dCbXjkCgLwXMcjPPNjth1DHJgKbE3DhfaFExGTkfY96vaFAgj9PDG3wxo18T1r",
  "key8": "nhuY2qqPoWJ3XuW77P4XiuvNZFGuebj47DBv82FNAXPnvgWtVjJc7xQmjrHtxgKT74fRAQsi1n95Nwiu59KCfqs",
  "key9": "5sZq8DsfqrVueaKVGtL9DEjhyegEism2X3m5DExDiY9M3KbJGcPFMSmZegimYfrqXV5VLJ2xiuejQ6GQyFfSDwxs",
  "key10": "2SpCtMuTto5XFn6S2qJfqouwsrrZ9qfqT9Es6zcYzeGuLSz2SJ42wkbU5pkCakp2aUC7yewpGf24TgcsYPDfHA2V",
  "key11": "5GAEs8ooYvvTVkNWKGVgxCCt23xyyApxLi4WRvam8b48pz1vNu979F1r58aj484JCrKyJa4JVZk4e39gWuatArGf",
  "key12": "1YKXhfeDqfAcWHMjZA5bVNCLvdFECk3BEQDum2fTpr45NTJCSNJZ1nY5LYeLTQv5E3Q7G1AH6yWEom6nRFuy74Y",
  "key13": "nk3GabYRMSawNDSj75g1FR8Aw7YkBNb915hAJNVJyMWErLN6oKLZtQTavCUTnpBrwfjUJnroD5xxsPFWergUgKS",
  "key14": "4E6FiQXekUgU37A4AprRvs5JFZCiWZxqRcYivwAU3C979nDo43BPEUC7R3vKsBkKnC8LspSyCMtvCcBUXd9cYVUU",
  "key15": "4dE22NPXCxk84e6bEqTT2zCt4VKYjEkE9S7dU6TsVZQp48qWrfVhts4c4FbyXiDBhPvgwVggo2WdPEmcb8oswyTP",
  "key16": "5va62YiTk9JJFh91qN1UjcgSG4Qms2bvCwPnp4pSy1twjtZVaUbRX2WowzTvMDXBTQiguTy688BfRsfuaTHCFgAg",
  "key17": "2EYhEf1p3Q4BeWj8Q5Jckvcr4RLU6CeGjNq8ZTwXwzix1nMkc37twwizDYjXk51ZNE7TkkgqNXV6WkhJCaFkxBk1",
  "key18": "3bPrg3Y7J5Jg3zDZS8JmY8mSrHLxJeV18t2QfyPZuC4CLw1nyeXSevvKQUhboYQV85qFF7tqzwvgQXW6Uqk4apjY",
  "key19": "4L61LDsCZUUupZrRX9erbXt7tZJX4e817uetHfVEQ7foAf2izdSmFhtDeygdTDCvkPWTaW3CfJPhJUbefzNDRDdK",
  "key20": "4GB9oQqZmi8mEMwTbQuMi2uhz6eUT9PCa3KTYMxPGwNuDWotDz3w2THu4ku7cHZatpPTf4fyJRQCTc9VMjdcKp9b",
  "key21": "5iS6RwCPtLdpNkdgyHkjfuCDx5giapPZzHZ4USUd8WnGbpjMvvgP3HUEc9DgcspaLf3WpqJ85kBA4Zj9Y4usfyZQ",
  "key22": "4XxYo7JXx4HihxKLqnmuTpqzG6hzMaHgbzCVaSDyeiDesjSW7NYdXcN5TTcu4nVfPDwwNPQmaRKALgzfpcGGUvUH",
  "key23": "3J3RGqxb2u895iUeo4UqHEwra4GEN3Cau4QFe7vX97uN4N3ezGsFbWT1VhJRtP1t3axGU6wQRQXcJQbVp2Ba3dXs",
  "key24": "5hnt55Z95uWZBbMKdA1Bm5knpzekjKXGtMgd3D2CocxFPSKEdXJSwxiopo9ZMHWbhsdxnbtJTeSXhYUBZo6ieNy1",
  "key25": "5SBrhwA1xYWJEYxm6PSPwFb3LJSpumZh6Nd1YdA1L8pfBXpPLzetC84nXK2Azud8vq6eSW8QPEt7mMq3gUrit7RT",
  "key26": "5fbq1NmjJVHvymEZgHLRPBFs3FzHVac2PSYxWas78puMUSAv8BkQJ3uggr6n84W2TyzJX26wX675HJzp5S3RAxUG",
  "key27": "fxqmHwTfz5AwMKT1ytJMHsVvzqWJVyHVWs4cqaDPcXrCVrkHJj9dieBZVJ6VJmua9LNKrce2iU2eVZkRSomLwKg",
  "key28": "246VtTR8RtFsr7UAkLGo6jbRXbKYp7s5G1dcj62E3jPWPkhVpxj2E3FPgJVq4Ue3WjCsfX3cjJpRT8nGMX9646Mf"
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
