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
    "UK6QAisjWXoZJbFtzH7bruw7K9es1D1hg9iTFCqr37gFrpxf4E5SJPJbd5gbrAggp4KZmx8WFTis58dmSfVennn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSHupgc5aeUKRC5jBYQ223XF3ps2y4oEpx3RcYEJB12feM8wNRqNrm3TdtrcnMvd9SZaEuX39GEkaRqJ3Y2XQbN",
  "key1": "4Ezg6RWZ4JVvdw2mSswkSEQz3EHCrpC57j2HBy81eMZso4cWPCTt73SGbvBa3obXyENnFFGYEQPirHt4bzseforN",
  "key2": "BdHvq5u8eCXFJ9oJN2Xztv36mNA6g2iePDjCSHbxB9NA27aArNJjaXjoDebYPqBqp39CThoRX1iZwSdBydAzxgV",
  "key3": "3PkPQDbETEhWuEgpWDob7ojwiM1Sh8wTWDrEc8A3Gifk5YKTKMUHtPFUnwWxLmdy6wqpC1dZHZWyR3wtvuLGJ9hn",
  "key4": "47VpDjYLGcHXeGUhWSSUDBGGrHX4tnmvKWPN6zNcCcPmZ9cM6MWUVMNpj8nsRgwxmsaRZGwVPKvJDcELh2KbwE4v",
  "key5": "35rWyQQ7QprsgPNHFd2jqCJAzCHWHF9zwwm8esBwi6V64GMyQqSm7Z3vPtKFg83JNpDaJAiPLPqdC9A9Mt5ydfS6",
  "key6": "5sboZeGSF5pCtA1v5RrJkcxgVwHt3q5ngJsETHpXPyHrUaoBSLujDai645aZsEEGq3pWj63T4WT3YPDPZje1epB3",
  "key7": "4663r1toZMPcFZkovHzWKia3YMe6wLUgYQTVyp6D9beRVxCZaqbxwng27S13RDPqmEqysS3hWSbmJyoCxazPRJDd",
  "key8": "2XUA1b3ZVrip6Tt2G1zaatArgaVeqdFPFUZDbUrmQsB1T7jisBuvVVxVdCaccBFQf2kqK7biHqEbkoJQyVrzxkbK",
  "key9": "Ym42dArELRbDB9hR5xunX6tVLBw88U2F69vCLWnXqb2TUk5mjTjNC9QYwK1pEu45ZgCyKdPt39kKCFQ3oM7uQPD",
  "key10": "3ZSfhpg18zi7UmYFLHUvHd8YL1DbKYEZ3AoLM6GHUwFuHY5SoLEowK94V1X4gNEwZnfdRJTKioydtH6TgDrLPY2m",
  "key11": "2wSh4T3xqoxsY4JF16m3yjhSTGcQhqg4s2WU7xdCTCh1rvKFVSighJeZQJ1nsXjJ23MFEYKejayvJjZoisktohBM",
  "key12": "2oqgVXnuYQYk2LjcCBbuVBGEa9n3LP6PQQLAvBESEcLZyQpg1ZiA4mLdjBSB8SKr4RD4VLuthuySxgLxx2EsCE5M",
  "key13": "4LE299s9ThfxzYVUCjnnf34NzSJCZvaZ4j9PX2HhRk7CaMJaeZwui69vpFKjnnsQnVNSYYmtwmTdUaDBJKLhQi95",
  "key14": "3vvSPrmkPtT9AaTsA6eNv1hmE9X72R4QHPDpGvoXgy26A7KZpfAfHyUMAz1jDiKFtV2TKnNHWeVz4UXPsjtB1eRo",
  "key15": "3kNPqJtnXE2Wrjznb5fwirGW1sAWmiKD2iuNWMUNq2YXL8tdJ8GHbHT4c2Vvw9P5Vv9PBy7C7YJ5TMKwxB3BCsWd",
  "key16": "2Pmu2Z9bQnYRBc9v8qiQA3ZgeNqgPeoqKU8BHkpg9cPw1XWJkcX52VBvMmpPL7UXuHJvDEw11AxdBdSpsXgYYd15",
  "key17": "5VdM5uo7h3QMdtktfHdAFbLXvWYYob16ecPjwZq1MtmqKPbwmcHPD6KeRgBuHSvY3Ua8ozgHm2gSPbp5cryFNAyD",
  "key18": "YnK9my4HmMfBbp189dXnwQ6VZcuBxTCJMQ6ANyGhpu1DNT44DWTGVyL6kXmcBFe3CL5tEqk5kHMz531BEYEHT7H",
  "key19": "5jNxUGmwEmWZxLDVWqCEJjo5E2fEQ5DQbbqHRWmecxzEvYBNY7PpdiZUFC5orJbKHkwwwmLswsjFx42WeyFh6Gjd",
  "key20": "2LpinjiAqf9hEhvYTVVLoedSonNSnPuo4aoLZSXieuuemm4wTGTMtcrrt71HTc791JJGMoPFNkbgWsA7mQNgjVfi",
  "key21": "qKfKhejwiCMPh23tTjxYdsRSMEegmvFbNcBVANhWbR4mjrys5hwznJLLxNrLQzqs3a9LvCiHJPcRLxngmB3YsnG",
  "key22": "4PRqyezcL37dU24KaKrnD75ZhU3qzDraFPLmHXAWpdTt6MpkYUzeNSh8W9sKCp2EJawevpFn5PGJFUg9Xi4yCWEv",
  "key23": "6cQdEcptFDDvy5UKn12vDMPeaJqDsiX5LTyxDo8MVPdV8VxHiCMi4QRhAHMMWVznSXa2M1awJqV3RJrqXK6TGuN",
  "key24": "2U8BnfEonpR31uLPAaQZWYsSyThQHvs9UDwCBQ4i648ecvNZpkxK5UN98zbc4o33eC3DJfuSQMJmQCW5RvJ5Y6He",
  "key25": "37aoA2cKcuH7eQ61Yg7abTK1CzbwLwUWniYWAUHBbjgnhRSQDtoTJBbDemdreMRW5qbfpcsE8Aqe1f24i5K439tw",
  "key26": "46yDT9UPHfGZBSGTiZMv66GpyZSRnPck6BSKDtCu83TrE7YPB5b3cdgCd5xdbk3MCPpzSADnCvm5HTF52YwofXF1",
  "key27": "3ByQRyYvfy483Ri7Y55LxeLCk6HX2JrYBJ1Q1DgztfTj6dQo7dnfVfaQDMh89nTLh6b3LeNHh92q4tHt8FrMNdi3",
  "key28": "FrLduUcCfqjEEuWnMGvpY8qNYvwkZicyMi39RTLuQFsq3QCMK66rTHdyLnoQHhw8ahE5WrTvasJJZbSfq3EEQKZ",
  "key29": "2VRm3dZE4XSn3vEiow64BBmr73r1Df4SvyaHqRbHXs3yyLWcSNYrxTeNZv7KbXLLD8r8ZB2YDeForVhWMHnyn8yj",
  "key30": "2PaX3FjPZya7xUNSZdwkzbJi2GVXSqdsvJTELX45oifniMS5USNxQ1n9SFmp9o5KVCvjvrDaw2U8xnjKDJGWSMy7",
  "key31": "5WrDPRFCRu1TLJonupK7rDhDUB7FAhqscgmcRGaCeAGBJR5MVQ8YgRDUj93tE94HPno6gB95DLGbHUHb24y6yyGw",
  "key32": "37cHJcqzY8DTk17cW9f1iLQJEsnt3hpqnnhowW5TBcVyZ9ibYt4rzEAaQ6WyvxuNL3D9Qpyd7Ec5Qz81HJjKwnbq",
  "key33": "5nMMHh1Ss8dVG4nVx8UxQFJ6GVTUVS8SPcSLJtZiAcXYovmDzToo3yY3JJT6V1sWKh3xmRaZEb5zm7HMfnbMTEsr",
  "key34": "2BPyve3NF5iUW3NC3vNHcyJJpSUD9QcE6HcCQsqfsuMxHwvJBDMfeDNDvBhrNR5zkjW61CAbxNmBgjZLgxhe7bCw",
  "key35": "GAKRnwqqn4s61VPVgAbgd3CXVHXHJkow6Pt6w6XpJHX3tih3EjJhoqevE9Hpz8dMTTHybHNpugxh15AQiNc54pX",
  "key36": "4c5H7XFj4czPZqDzmphLNvmqzVvkQgN9LDNTvpmRPmSKyUtHfJgx1HUaFFCF2qAQaZAJu2iQCpZh5Skww4wL3mCM",
  "key37": "2BJyqLmoCLSJRTzHJrsfNzrTJVZFYSRbZPuTDkNc2ZLjnb4Tz8SXNT4YjJha97rkyCRophCNNYFTGGcmZFxS7Lh1",
  "key38": "2mi8UHvyCS5e3kzR6ob9e2WaAK2u3uiHhx7hErdJAXKqhSLRHfoocR2gzfkg5mDZWh7AYxmWdRscwvzBEokQ1nEr",
  "key39": "cSfnG7MUfhZeQYwtpPzFzoqokM3t5Z3vPPiYTWyQNjNEMaKdToam9dCBTyhfNTgny3sxyvY2sPm1p6inCo6mWJ7",
  "key40": "Sn6zZh7tFHfNvpiMVXBV21PnmdfwFAw3pnCaBScrpghKABa1bzXbzCRbzdVzhSTvn9tnDZWifxUiebCDBYjeQAa",
  "key41": "KXQ7rrKG2Brai9JbK42i34QPLNQ2W5gLXJ71JYysTb3pZ1dPdADQotPbnRHsTBv63L98TGw2VGwFsg7wpVWnKSZ",
  "key42": "4aRg3VweNQcRtHHgc5Mnn8Ch7XCEJWEbjBJZdxNXtrMRLo9cMG5tk2ix8JYmNLrNFEKLDXsfQgUYpMQesotx5kcS",
  "key43": "2zqFM4CoQ2dpqbUeFo6px3BjsVoTZ2Bm2LV89zhrDXQRgPYf13Mc7eacZ1G1SAJP7GbEphwAz5bSTi8bX5hfrhG5",
  "key44": "2225hMhLjRrcrUw776Tn235RVSMsPbQR1w2ejg7AR1aHoqdzp7vooUvs2XDiMSpg5XoSvqzR9HUzVGZFkDgGSAMP",
  "key45": "4Tm5K4L5Yvs6ViEDas4NuhvgRs88Ev2pVbFTkviSM16UehgqqzkAB37s3axb6y7Z8x8DKR4N22LZrND5RU2VR327",
  "key46": "5vYFF4a7tXTa58yEe2cf1nQKkbSRZYJ4LeTAkdHQQ4v7Qcoq35vGrSByC687YHLBwwpujPuz3wGE11HdTtzkpSmE",
  "key47": "5E5dxgausaZ7MEgtDZNZH4b5tDpT4nDuo51xtg9NEwFsHTLzj5WY233zaEpGNXnZ8ei1YBsZuNeAxNVnNVhcfVFd",
  "key48": "5F6ZhjDsvMmt1EbjkBRYAmrRvDeUMy7XB5ap8seVxpDF9c3ctUcsMomz4BU1o6aPZY2XTiemcx7T9PCuBrc1dRg2"
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
