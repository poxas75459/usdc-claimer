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
    "63NNn5v7TMFEBo8xtCD3hY81XDgBRPooQcyThAHWwUHc9ds8EWcrncypXM6dhMxXrFg8Byxxo3EJ2A1KUHdWNcRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E2msJ6yN3P1PQGzUiiX3smePHpi5nSGEghzSHyHTkAHNKR1MAfD1zc7PmjHhAsK4oAnPj5uN1BbFawTUKchFWu9",
  "key1": "458b8HWeaGmd9AQkdBfpejYmfYueL7ZSRkcYAfnUJkm3Rz2s7TFbgfM94WWRFo8xM6qhzoGqkAS2A2eo19wZ1x1B",
  "key2": "61zpAEoH31UiGCSSPHPwmyRPZYEPwLrxJcZnoEnMPjRVzt5cbWv7rgaJGfjLCCvaSuWDcBsEoh1wiQhgp1ezkZ1T",
  "key3": "4Jf4vQuMeXD1ynvbRDiVaQhyFeBznH8BbMA4znQ3MCUEG3tdTXW4pmkZGRfsXVRxfRoVy3UUgqnTEPYt7sGk7E4W",
  "key4": "5MpAV34PJfkymkJp16oi1XDp1N7HqaNYHDENWWxrMr56SRrbBofC2nhQvaGfvAqRpPwh94MK5qvzy3hzmd9h7iNu",
  "key5": "3TR8pa1gVV4CRYUBC9iwNtrxs1XA1H8cR8ircFcEc4QPyyEV9wEoVRCohR7WBGyDgJuZQUhUP1mz8Fm7hUBXtPmH",
  "key6": "5hwednr3RQJyGbXNmkWHfwYSHLGqmkCJ9M9gyHrzNyAtHKhqWybzVVJvA2fJwsZWuKf8DfmK8i6Aq7cLsjM4WWpa",
  "key7": "3bfdGHneiwYXG9Jo8EGyEYyu6xVvLjuQg9HZgtobaXUV2gQgYWaV5n9d4c38JYXbh5VU8746n3kwZXiKTLpMziXp",
  "key8": "2Hvt2WZjFKPPv2XU1K8UJSErwg7kAQxNVCqAksgSA6rjwnCJyef6DEznDko56KA5Ma8yTuX73ajsUUN9NJn1681N",
  "key9": "2BdbgUrk8597JBafqEpBx7eHH83DofNXYQEQnRtzZ5FtAUG95HB5gt3EExD6id8C3rxLivTvDzkdRH9cjMqEXxSD",
  "key10": "49sR56afkx4wwX3YPKSCqktMERC2gUESYhJA6JfcEk7nyiPE3wEdDdoFD8uzAst6uFCw8Zq3Dbo86Sz7CTMvXJyj",
  "key11": "5B1sDBFUSYx5LMrWmfGvJsw28WZPuQEfXpY5stXNuz5UzsnezaE3FVKs3CmHdfthU4JGvziPSDxfn4ANZa2LtzD5",
  "key12": "2MEbje6zp2TLQLhA2XDF4ku5TnroMrxzQy4SHbrHuRmwSkNXV1tiux2nuRcS1EjuJdxDcNCy6efFEzknVZpWLXvn",
  "key13": "3fe2BdysXvcbngQR28NVt14QaaBoiCiAXizXHx41kVUf5GC6H5iP1HtFffVTZTLyTjFdHkMepowpTNUMZoNeF4tt",
  "key14": "21YUaXD6EejSAxQ6cLXQDpzH15Q52iDvvj9yzQ8jJhmraB9mzj2uxtX91vNpiVYRr4UjiHddxbrM5raqQN6YqbAf",
  "key15": "4z6f3yJw8nGT8oy35EuCc7R4zmrANdat417a8eKnrtAJVroZB17nRmwRXp8txbuA1ZP9jECHU42JQLazkuyrfhm5",
  "key16": "3R53epE3hbzzbHCkXYxPrScR9y7nLRGU2gmZ2cY9CSGFBvqvhHdttoSkYEnJCPTQ1rHTSAdDkAETSSkKU8vmtnHP",
  "key17": "2FTWWvJNeKZ8mLN7Deabjw3rw81yXfWgusPMxkVKY1PdbTxtDGf14Lq1JW4kREfJrzuvmewjwHe6BJnsKDXseiim",
  "key18": "55B6dRLUwVCFMLiYYxXZRsv9TG3kzqNtb1nsx6UQxpyMg372Y9uUku5DsSiDcB9mXfUA4QtLKY64dzfwc7vdBHpp",
  "key19": "3C2vv3f2kxReWksboUF63ZX3mVUeX6J4urgts9SmHYFab1VUGKTvoFnxWKhuv9CZT6JEjhcUf7KR4TKfcFVge3Pt",
  "key20": "4KHY18jw95STs89TAKu7APQNNbbpSBDdYmiv5SPm6mfxoMavyTNzYTPvEdTXGFqf1voD9aGdTCrRMhq3SaBKfqMz",
  "key21": "2p9bobUAiftFz1B9ZDYKsqm9DBNYBU1DWqo5DoaNEyDhiM9mczne3MucJAf5NDqhZWhaj2em1YoCXQH5HHpaCGpv",
  "key22": "4jEnsh6VoADAkUAZgSyAfm4jqQWAGy4QWz6gmPMAN62gkfo5UiewM6byXVsAY5hF4PoDFB9mXnogNsja5ZfsTF2G",
  "key23": "5etcmznkvU69ULvDwx5iJnLbpPfR27PoJesoVif6WPNBm6MfSHP44ZQojtjxjCfbfQ1LZgkY2dFt6DVPpDT8qw2u",
  "key24": "3vyUUkizXgDAFHkcHWjcSp8dBi9byfULKxNYKkhqFwYyuagPBUKu6NQhAzhUaysK92mdtNZc59Au7iGPKUXzSjUV",
  "key25": "4RtbcDNvnvKe98sWptYTqWktBktnk9iPwLL1sxYfQgUn4yrdYN6r7J9C5zBdNVsnLBK62ugdur6QF3JMhQxCH2p1",
  "key26": "66whDVwwaNoVqYAQoF7FokS9q6LEyoyEzGCJbFitAcPahjy4qAXp8Sdtyb6BMaAKJrE4QvcvFimUuyzpmfARBPAr"
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
