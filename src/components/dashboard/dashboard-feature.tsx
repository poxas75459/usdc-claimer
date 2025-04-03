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
    "3NMPf5s3U8i4BRafzL4L7FRrUmFE4uYTobJeBPXSPxCTNsr8gPK2WEtbvcmMce932VcyRVX8yLpHL9SH6WQumDug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKm6Zq44pUgHD48k53AAY1un4M13frePdvgNAHMnwWuSXK7vSELheZzJ6gLuAdE3GQvVTZr2ZRVTViUbEtnLJk7",
  "key1": "51KnxEBeEP7oW9x9EMxorY4WEGhPPhjYBfMvaTAy2ooRtVjv6KGR2VEtPNSBRMG9Q6qBXepZ2Z1Wnc21h8o9yLRu",
  "key2": "yAK6CxJQ5uj13gssG5R7hu73wZfuUKoBvBxWxWU54XCfqTigdVucwRhCDWR8EBdgkC4menav64qqka18JV2fwaZ",
  "key3": "4DYsjL4SMCq8QG8dM3FZ8vg4SoJKW4adBSzonHSvWg8BMwumKnhe7srHtPtfiFjQiKjSiEpPNqWfVxFvtWSANY18",
  "key4": "24DgAB2V2DivBY1PDqghCo5LoQaf842hXih5LoYfvPR7agP9m5voutTp1faRRK69iggpzhW9L842aZVBUATo877t",
  "key5": "5wav2SiZW1sYJnR647RxxTWWippceEHT87iYjwojADXDdHLUkENHaCiLak9puDesamAR4HH7A8qKREck15FFWnB1",
  "key6": "5Bs6vTFHC4d7JYmhykimeqy9DEqEHnhN74XQSYpne4dqMrE8SVxSGrCjSMNPRzBJ1JxN5A61i7g2JNUuR9BQr4uF",
  "key7": "5w6mxrSLff19PQSCc9oE16uanfCupiDi2SbrqZwTsYSLUy97kRt2veTTJ1CygQCGvxByHUYntCgT7ycQwWDedwa6",
  "key8": "2xqPrBe2gR8Pbg6GxUKptv9EfgfTTfjLNePWxWNR7ebBzPvt3uhdoCfgopeTbYDo7fAxfhhaCN42bV6btkFzxG54",
  "key9": "24VejBpminjFM6S3GTNzd9xWemr38kd4gbiRaCD7yBmqtSeYU6RdodhraG8kY3C78Ar6ZJhnwEUnKF6PTs1139q4",
  "key10": "2riAEaP3ePHEY31dWqhXNfE66rNUzsWCwEhWv2yRLPX24YHrvRCbfGBcDSGUvQM2C2otxXtYymwWvL688Ubhabtn",
  "key11": "2dqhhWCSdsbAG4GyusLjtUbSMKqEZAKcd5dCuGsXTCharexQLKtoYHFsiSMRXTSy2iE2h4ykj8dyMsjkRo4Hiw3t",
  "key12": "3HxEPuMmSKQzjjVai9qE5YJinVkH9HRNhiDKoz2CFXzx2nh8pKr3aYzErDHF2DWkMC1Kn29ar5C241frdyoiGYtY",
  "key13": "3c71c63DZGcaiSGuwihNj5fBVMVnrvopW2SV1PQMG6DDEvUMY5R5UqtxMvskDhSQXuLGF8wewDZdxVzdNS5CahNC",
  "key14": "3qTZ2TuiUbtwsqjiFMDXyCVcaR7dcx1gjZqKXaFxqUJhr6XGLk2qS4RDPcThk96CF4arPnuVruKa7TLSnEVdRzWr",
  "key15": "4qXg6Y223wT6EM3NehfLgA2gW3DxNqYWNgtcXWzhxx4ceAffiV988oWuikwcrDxoL6K6dUnmX4xLy5kyGubShov2",
  "key16": "4tkhjQ1WCAuadh4WxdPVJ5VKeB8ZmLedWruDvFUgJthtXQq6wRR6r7pTaMmX9UqEABBmJ7XLFpTFtQuLT8FgHzmW",
  "key17": "5r7oysUhAg7v3G9jnLz5JQxiiZmpFmrQfH93YCGg3UUx1UboTT352K4et6BphnBvGimdC5XJcEZjMsgp1dg22Wb3",
  "key18": "3SzcL62TvXaWoycyy7hSkJ1Smrg5Svzsfv17EjnhEw6bMEiUcHer5kimfjLqjupsQ3iepzugHAvWFzcgUCr5b1uH",
  "key19": "2h7VZeYMUdsgHW3kjqW6A26F7QmEW5gpXRUFvmQYRtYAgX7Cou5F3fY9MQxn1DnUaaUHFDKijoJwAs5Z9h15iBWG",
  "key20": "5kuLFDyzLMTUoGxKbSdxUPmgmVZysbKgkDisLtH9PLJMHB8am9toTrywF7T6GGQcZxBntkpajS2txCjK9N2m8C7z",
  "key21": "2icNLeQy23rPuUch6NMZvf66CULtYRmnH5QLuQRRkHxs7e6L8ACX1r3nGMK3VdsDpMWVwvLDJpXmbgV8WeoesMxs",
  "key22": "F62xZ3D5KC3anNDJioEBpu9apzeQMoVh2maYYPQ4eD8cKNuhHBc7EaSUwY8UdzmpFxFDjdUiSMo1QwxpnUkXcVn",
  "key23": "4nBexAF8GJVz2Eo9t9YEGBAsz6zFk5AFzkvfakSa61esgn8GtXHt84LtM4fXUEvAwLHfU6MgWe3QbTFsX5WkVffs",
  "key24": "2trgAkbJLmoZYMsY69zjn5mMcWxQb4dekMa1Rq9XdxPwcP3L2yZBG2owiV5aex8hDs1jtGQ7mmdTbuhQcXppudXe"
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
