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
    "33gbtdDNC3qSGcMt5AABMUejuzXR8G67JYVSXbLBwyMNdeb2GSKvbKffhmNSioCoV6CJmMDuDNRSi67NeToq5XjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQ6cSc3GqUgd6zyeN8TUvtVitu1Yf32i5ssUyaGTjW8j2QxDJqfTFRopkgE46A5HEmQjCzmh6dabkdPCzYvDZGN",
  "key1": "389HgmDSRj3ZW7Fa84KVTb55UfGe1dA8otFVVPGRC6sG15f8JkeMxgcKndpm9paQ4CvG1MMfHRwKzkqFe5ftBpXi",
  "key2": "Zs5wn8H4KcTtGDJ8TkqFXKGyk2yRKcFurMx5aattYHEd3YKAXcxRUVxQhMsPL26MDGKH2QCaHCT3nj8gtgYjC3X",
  "key3": "4QCBh1RQirJJDY1eUiR4H8iAqT9sSw3EfXoAPcZGntqFzkMGTqjmSGZ3UWck6fDDmyZ3CnbJRMHHdJwr5tJBTDnt",
  "key4": "3JZPuwK6dBZp2CUyqFLeUs2z9ENFWTtDjKBHZpPv4MpzZNMe2sy9HgNJZGYmJHeLNYWzVmEBVsFDus1xFD1PCppY",
  "key5": "3oQHmBQQpt5fV25BTxoskyBgyjTgE3acvy65zfW9SzwAQCRwjdkC5NEjs7SfAvYMwj21GExRnEkEtJLHXA9njF61",
  "key6": "342TNCuzgttw6sSGUW2ReEmquv5rzt4AKTHvdXRspEXciKEGVSnAy5r6L4EeRvyLN2P6dgAf1t6GwcquqJiPFrc9",
  "key7": "2V3RjxyZUcLWvmm964iQFyWm9fa7kjhB6sMQzJtuqGvmzFpqajA3aszQnYsQxnZVXMFQmGie9ygbrZ1rJm9gaEk9",
  "key8": "3DrDgXghQBgYVjbpoRbrUz8EqzJ1AqFfqQTWB67wna49sX6vfsESM5VkXUdUj1Z33t3ssRjQfB2ruMBAF5v2DpFj",
  "key9": "2L1WnvLQStcsccXHcZXH7j1Vm3FUCh6XvrbRtGybYufwHrAejje94kormiRnf2Pe5oSC89hqvMaq4wWPytatJgD3",
  "key10": "ha6S21ktmKHdgCgi8dr5irryxG6Ecch8Raq4BLgHaa316uEUTHyzT4j8GUEamrDd4qJXkcZ4Z1v7q84Ahc6oJYd",
  "key11": "4STrazTveNnntnBoqAGzc73ckEgjcQSMyhWUtL67c8EawVXyV1jC3tXaf23fD17gE1RckWtwBVgV7gj3bxenpQpa",
  "key12": "3REifEBXYNyeKksxwmpUFmF3HNootQj3Y1DbVM1JNJDEEkoZNpcE6SFvdcxP234ATbdwV2poPFts4xNXgFDSXqtJ",
  "key13": "bUdDrStUFvbT8viZD2tAGaU6z2BDJFnWRDA68DzhUUhBk8iNANREKkhdZdsE1X4JeeWqUZgYYYaJ3Ek8WDfvcj3",
  "key14": "4McxNkWTgBeeFvgwwgL68ixWzyf6iiYq7z5GuGJ4Em1x54JWPBx5eEzE96KvUGqwG6BiVqVpNHhfLRfVkQLm7iT2",
  "key15": "54xBruBBydDrsMwu9fMxc5mZoVXTBQL5fKjZwD9DbwcUTZnwQAH1V85AeS5PSLDTAPpaGKFtC1MUG7noRf3hkiBB",
  "key16": "5s5jRQVz2Gxc5vYAUXrE4aSoUbF3kgAibBhjC5KE4rQRXCtt8PKWHkY5Xi2KCmjivEkzkmQZWLpe4Qy5cFHATvNz",
  "key17": "2Kbcq62hdoFSoYpFtfYcwXyNzpq5f2FgtXLvGEMf9H7Rt1W7sWvczNhApjQTP2XXAzfmaBUqkRKnrKVTxzRoLwuX",
  "key18": "2v6yWzqcH7WYDnPfRR6vj5GYy6UazantuNbKaCgijGR7PB5rBZMgBF66cCsgC8vZtcbmqgPoXf28NV633uDrK5hp",
  "key19": "27tWJDcQW2QyhRgd4VEUa4DrLEWxx8BkqpPZuLhoQBgsArrUJd6ycBJdyz5BNNgk9DsdcLCYmNVPonyS5QDLLj14",
  "key20": "4koLv3Ws3T4TcsEubcEj3inhcQcc1tjaGQh6GASSUfmR5sctC93b4vTBuzv8tR3UsuSnUXaRuu7H3raq4Ai1SjMA",
  "key21": "4J5v42Atuii8X3fzr3w52h7avmjkWiMUzMKZSMVEGWNnzNU2WD5zEQgJ6bLVPtSDgMLfyJBxdWSzyop5eXhoMWzt",
  "key22": "4GPEKtaWH2FWrQf3oJzLq4nmYHvboFdxfRq82KhQVRCs3EY2a6QgSyCtiMzcbNKf12wiRbiSA6giUuaz4RQD8ev6",
  "key23": "2mbSvtkc51iB4b5kpPAU3cfRgM84HiFSNjM6c326pU4Jed9rK1SdU2qS2c5nRbnzWo21Y8XT5y5TcSPWnNL8CMHr",
  "key24": "wyQAdXp1i4DYWocmhiWTHBNoiQyierZouftmYaJRDapPsjxQRmTou8njTHeJCnWoSd5Yksn38S7rwg8g5byh5GN",
  "key25": "2rBT592KqE5kJ7g7c33PC2K8sKSmSCPpuQFx5Qofff2zQbKsJA13bRXCnL45aZwjEmdvdYqqA2GYqfSNcviQMD7",
  "key26": "4x1r4aqgnfiYec5uEzUZRs4U5tkH6ciRTcJ2XSLLAMvhAsbgEX7zzPXPSRA15X6WVXkHqnwJoFH7hnD1vkns8WPf",
  "key27": "5K9PQxMpAU4ogeneBs5HTWrRx2mG8XFKNZQgBeXcJmATVHKtsgrwsF7B1RATc3iECxK7ypzLePuXduaMibgwbpRT",
  "key28": "2Qf3xRye74GMp9m4MfFQ9RX2R92QRcTRkr2qeeJF21b4QS2CnkCRZV8Mm6Yz4vHMjEx3i3ZjHrRxJ86MawXAtiuh",
  "key29": "2b6s5PQ1ENBS4Dr5xZQbQavFWYhR3b95pPjKjw1REPsidrH278bmb6JTcnQVdnZe4F2cQqRV8d1VWsj5GUgWapdC",
  "key30": "2SQBbDHUQyQLo2MBySDzPDBLu5tMXzLh75CC4xNQGtrPKomU8JqroTxYjpBoxeNpaJMJScaWWFeSEvuCx8U2rtkd",
  "key31": "4TvNZGLPRdTNwXorBezLnx1j6WroSbFYAZRMtv6SFfh2ySVZt9WJSu2a4mWcyGg8CiVQRztZhhtBTwppph8YU4Ha",
  "key32": "2mAGvHMEgDE5Rgd2ERueBj8XcAkQLKqHAs3afUi8G8RzFcAUiA7RA47DMXtk8cPZxZs2NUda1umrUrvt73GUBzFm",
  "key33": "4Cbxpe4tf93XmeMGtJCtxnMuoWXWCUMAAvKexJi8nDkxyYss6iSJ1JnCkKqJMaNowAK6Qho3MgjsgTW418QcGL8v",
  "key34": "2PScmXXNdoPp55kdfREDvMEg7T7zs3WyibcQLSV9htRDTGnkUJbDPF8Ro4HAGXw4kgqkpq3dPg8qWMu8We4TffPW"
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
