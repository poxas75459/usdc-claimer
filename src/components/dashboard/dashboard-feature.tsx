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
    "4GjLnsojYBorVZ7FBo1o7XKHuCkuKbQRzSS4kmeBTapqsVCVLpttspRw82rFiZ4LpUxDJ8UQGXwD5udu4BxTGTkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3opMNKTrqG4yzdus2uEqSJhGeRVjchhx8Dm31HHjPV4PWJ9rsME112Kzyb6uivrszJdZG5dHpw7ThuL5ZA6pVui8",
  "key1": "4126V5bt71wj7sjzBNH5HL9kthtvnAP3BmTQZgS1zs7DVvJ3J9eajawWx3UKqPHopniYwv5bhVJr4VbZ4orF5BTB",
  "key2": "4KP14JN8LKZy9HULxudkiPFWiKuiFESk4244mWfgqP534P6JUhTNs9f8Wd1XBSh3AmBXWCXgeCPMcHNQSKYVFhxa",
  "key3": "2sEPBLoZTCK5rpCrgDGycTetvFjAEifz9kGeSR2EnwujzrodBPd1KnVkqQCBs5xbKNHY4K4Tw6BHbJ6GnC5ggA8H",
  "key4": "SitdMtWfopYgfpiHUTBDWBhF5y2VaPUzmAPP2qFzC2wy8pGi4KFKDdKH3kv8yhfTsjNCHA9hiuBhkB69sNa6LTF",
  "key5": "4ZR7zMPNZMCf98uuf6eEXmXHfzEbR5mTTMXQpfp4K1jGjskT2kgVZTH3UdpPpNWd7zDnu7nv4rjSnmhUvqtPxV3h",
  "key6": "5a4HEsBoYQomrjX7URND53NY5ptQAaknUHbvPGk4r5hPfxwJ6fy8PpupbFFqJUxQMrkjiQdmXVSnJ1g3zyxxWYXs",
  "key7": "5RidULthVdtUndFk8uwaxgv1U54EDgwYMKaudtLpy1DJW6DfY66LmQefBCVvRKMJxD7DPKS4ktQrX1Fp3QuQxtgT",
  "key8": "56gcmrbLgkXpEg5KGA6DziTT8eLaQUzNWZXmx6u82kmEYi5yEhfvvWuPdg9SamH9pKyMHDh8QnCEYQsoPAxwV2w6",
  "key9": "5K2gLzS5SLMUn2w39Nk5o6p7A4b5pESZjjtyucWoentYDSVjZSthyJA9TiUJtr5ePgc9ip2whfPKWKoFtcAKERSS",
  "key10": "3PfzAaUkC5eSpg8Mnkk3S2c25zKfcZzqrhqH8xLAHse9nkXxD53gVb441jeeLqg43nUnWbWB7XjaKXvLuntu8zkp",
  "key11": "3bH1twAWrnpTsB22rWzJJo17JPfKTLmpobnbe3JUHFw6W7GuMsGSU44X3XhNKLxDXwaFKkZVtQvvZzqXW9PLRmaz",
  "key12": "3DXVa2oQqtDSzDW9hgvAXupFiED7LbPXt4rk8TDbjw5WyaAZMdCCycxqvWb7eNNpp3HnimxeEQKGGKcJcMLhiWxX",
  "key13": "2BtJx4wyoHzRVPJ6w1dVoTuLUaYqs3dQe2VUivmBgjHZRjT5g2mnKEgz62Rmu2Ly8Pe2vLuebftyVF79iBLQf4VD",
  "key14": "362eFhKzsV1pSt9EPz41Es8CXmuHENYPqkG4Gm7MHotjEXxJXFqqdWPeGJyUCJmCPsSPt4Vu5UsWsehpn57SENpj",
  "key15": "4BRvshHVSkjSNm3Vp2HH77Gpo4jXhGe3Gkfozp58QiJ7bdYw7zjsNhUifhnTDCENbL9u53ipFqSYKa2NRQEL2Gc7",
  "key16": "apN37Xkh8o9ibYGNGzpWuH3wqocJ5zsKqAyLiqNCGsHkXmEDSVZBaXx63RGbXhghGkkbGY4WT9ZFUy2dAfoaD6e",
  "key17": "4hWLbkUTQZd3cwGgi19YSX6NPFQrUwu1AfBGrqUdnEARPGE4AWmtS4KHBmYevs8g48xHiiMmsaxR8TyBi892tjNU",
  "key18": "3zvshJ1Bx2npQKQqau5dttsrE58a8wPeNkYuFefuqJ92hRerxKUPqYpa8f8AnFbWV7jayv7udNnaCbzc3virguxt",
  "key19": "5cwpDvh5nV4y1KnoRpmRbtAXfpDJHEonaevJKfGsRrd44Po11GvuMuoMVfFpZRYbU39w6mZpLcY4sP72Kj4vDhda",
  "key20": "KXnEj2RUs2gkkP3n9ghLgGN7HosBtt4AmFoY7jLpaMNgTCmzYwKb5HmdrXhx6SxncXGVQHENq1DKt4BjhC31G8M",
  "key21": "B7xoJcQHKT1Yg4G9AxGBDbcqntpRRu6ZaEnv8uAb2C5AqcKWoKewQy8KSaFVkDFwQbJmgKPVS3Nc62244CoTA26",
  "key22": "4EZ91J9L3zDShfrqZtTb1pdzLa1qu3ZrCB79NMF9ffcSB6NpZHmcEYkNyErV5V9ukY1RUL5ZmxQWPWz9vbgvaF7w",
  "key23": "2CysKYtPjFEBB4Ve77nq4q9fjFAXnPmxyKdU7gjSPWoAKseAi4QPzikkcDShF1mDHwmHKiYEZ6GzA7e1JjvppEG8",
  "key24": "48Pc2QbkZKkAYMcRTmaHSQMm7SEXFsx1Z4DorrjAcLe2cvKLSvDpGviCfZ9yteYCTFHSWcUoTp3i661j2cb3Wyfj",
  "key25": "5uFBYxSurpSvZdu4BamUpaieRG9CV5ZRDj5D7MvgXdcMT955vrtkXKYJdcZ8RxtHBBXBHpZZoygUDsKBNLhqy1Z6"
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
