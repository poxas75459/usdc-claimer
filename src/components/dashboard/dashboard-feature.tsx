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
    "35moUFR44vdkoyScXfK37D332DNyDfiyjZwugRHA2Hooy8p1jtwbJHfHnuaFbevpajJVzWjCTPWJskYJBHpBvHdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3281Jv8GntDSxDjsg5r2b5dn7i2ALaTwu4md6onWQRazqjyvjtxkEXCnatR92RU5RuViaJNRhfsfZ91vdNpWAUFD",
  "key1": "2TRxgSxPaHRTW7tK8oYVCYZVwn3b8yDdSazkDQgJVjzwAgEJ6oEy16yT8Nx32WsnV6B1sAdYgA8agPurHtxw3gjc",
  "key2": "4TkaKQq1EaQHAqkMxvPKEt9Wpp3na8jP547A5f6LJcz3FY7psAadieM26e6PsikHqJGj5PkkiUUsBnhAqcHrQE6r",
  "key3": "3nSB4cCTNwc4AH7bfGxa77sbWm5P4t7GKFY3h2sECbVn5hVc3vnc5gyd5FRVD44sGBPDak4Tq5DXVLfYdkqesto6",
  "key4": "4b4UvDQeDCHBpPwXnJr591GixFx1XAxgJXHXx3ACuLD7HNTyoG1VfzEAnELzc6LNAL78kNuiKnVSfEKXDWYMdmZK",
  "key5": "4UMGSZFusoqaUHdhjX5FBPy9HFWMxqv11VowP5hgczejt5NwfkfVYK7ohsaHBnTdSNyQbz7vvvepiyE4gAw9ez8Y",
  "key6": "GqqLPqfuwibtcW5vfUdow5CKjoHND3FjFAJ7e5mfbv78snncGBxqS5etgfQn2QBRZozksXR24kv7LYVrhSpn9wD",
  "key7": "2BLystgSRMNpBGexWn2WZ9bxQDMRp2qkP1ZTnQfk8Gwp31JgA6ZtQ8N2Ez4skdazi3GnnDt2i6cu5Tosz76ZB8F2",
  "key8": "3TqVjhHk5PdRXe2LVWTFY6MwArQUS9zmLebqjNzVeq6HBeCvQCPP2R6Q5ABMtc7VpFJeg31VMtT7cgqj36RDhaaV",
  "key9": "2BPbKPiqv5Hs3kWVUrUh1bmYxiFYd8CXdvCt9vzXSZX46nuQDvf3uujmMimFGNeWM5azPVHXRhYChKXn69EbjPCp",
  "key10": "3e4RPLkqJhYSRhoqbwBzendjm4zNqjFhr9dV3ky8gutvL9vyE4FqaF7fgbrfUok2dQJmkPHYNhuTnAFdAZ4etLdL",
  "key11": "Z4oBXzrq719iC1eGeT8ksgjUA34jM1y7iCTigqGxAzgtEswn4YfT2efsz9iy7LQzBvmpWPmviLBmcTuJ65jt6b7",
  "key12": "5ciZ8F1NTK4Wyj4czQ2qRgWvvTBpjzyxoAQDQ1cMZrj3mVkMMXFeiCJaZhVD2eAYXpA4jTZN4RYUf9VrNxfYiU9Z",
  "key13": "49onRSuiXcb1gYBh5wmKEC2ALSbj4P2k6W7NotwbVYjDodjYQUEHsdgPCDbYnLMcNBiPTcWvVSDCiGhY6Kzc5jpK",
  "key14": "3f7wHpfeMErxFjSoxVukUoY2ruRcyCEkaag1HDmNssAZaNT8Ekxwi2hYrqCD97Mc1fCVLuZRiBKmS9Gy81Py12Xd",
  "key15": "bRswPq8GZhCGQdzaGLuXoEbMCs7ypQ7dNSLnUnNPifY2F2CrzWHaqcRVyZnn3ccS6mue2R17SAFNhJxyHJBGVAk",
  "key16": "VP26n64tNV5E4MDZiiZRtwfsnr6gFAQskgQoCN8887jp3uR2mkMZV5NP53TuBar5kK6d6a9D2s5YJD4FogQF8xN",
  "key17": "25dLMj57XMYCe2mVRC93G7Gbe9YPv6cJBam6dR1CK3zCi8fWzgBxwu79Q8GtUFSd5sS4GDPnzQv9WfyCZZcKMTX2",
  "key18": "cYdx6L9LYa94sZPMH6ssWtda3yj5oKBQLPQuGtCFSMZd3cC5sJxJtkLPrazngy2zjJtZMCyXCQdJ6QCNBjsyrVk",
  "key19": "3gGrdaHqLZz9Jz1B3bhmD2VrgrqG9oVacMuET8fbhoPy4Wqdo2CgStdGYC3cHFpdYHVMSoPZvyR6PZoTXX2JweU2",
  "key20": "df5Fth9ma4Ry5jvEuYLDyv51RtS4WLnZbFD5nL2gYkj6tTAHNtEsFoc3MfPwM6tWXau4AZcZN7q5vZsURQVSTjG",
  "key21": "3TwWWmSL7TCwcLn3BqRfe9SVvYYNxijTZy4opn2k67vj2rurYEyEqdRFA1TuSWWw6j8FxC4DqE7dje8jncc6YMMp",
  "key22": "5p4NzhQ7PTa6Q5ojwy5AMY7rpW6rATuwjJFTWvT2f4DSjaAm93HXMwNMPJ21pnNb6nTrbAJM3hdKiMLBwinxYP9U",
  "key23": "L9EuRSiB5prMmyyXkutGaaxbYM2Mcx71T5CiyMf2sjmN7Vy9WFXAUxvWNPxhafem9y3uCkNaHXfbt2d9FXH2VtS",
  "key24": "2BiAHfooRVRA2tDyDbhkvKAJxrqExSqtkJT5FVkpeWaQvbTtbMU1xqsevatoRDNPDgwhMCJJ8BmmnEuJSzP5iP9Q"
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
