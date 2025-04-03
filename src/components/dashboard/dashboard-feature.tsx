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
    "5MAoEeRSsRSpGRUCyWjDQ7DkcE8h3isWFvReVBfWENSXeMXHXs5V7h4T2LkHjAJhrF5s8ZzodSxeRHLuxLzZWcbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p3zDm5MUJ5s1jgwEJYKhcFwJgV8EMo8EKPeRXGygw2NfXFpZjwk7uWDZYqdYy8fgpZA7UoRoa5xUHVuveoW9QEz",
  "key1": "4DqfgKLkPa8B6EAammyuTDMjQJnVP4KwuDNqSpqDorTQD17cDnYcQ18u13SzgMBHk7HSsYJugL7mJ6AtbnL2mhaD",
  "key2": "24fhfRQL1Muyx5NjmN7U2mARVHxtqjahpH4oFU359TjCcNQoTyuvBA23i5PKfJuwQWfkimzf1wkJa7TQuV2EkrmN",
  "key3": "3kH635Wjs7qvMxmcSVB2heTQEUdWTxMHxkxFnyiZv7Bo9MxJkbQQEUXhm7fb6NFcrSX8etkY58fMcSUeq4yDuyP8",
  "key4": "4WCacbJBbzx52TJKvPHCrsCRiCbK9tYCrgoSgw5qbVmKxwsswpW7r2gz6MDghrFYi7wZHP8ZABWMzzTWqoi7jdT",
  "key5": "5ss5b8PcbHVZRiXD9PGiWm6Ct5ZR4J4vZi6VPTyyQL4Te8H2V7SCo82AVStuSvq1vvkScHkWhPn9yTYqemStPbE1",
  "key6": "5ACDGLVYS3rcaTC1dfkGyKdLByCqMzZQr1Nr1D4F1TxKpiMdxnQA5WzXToii74gou2kABXdYaPnSziZEKewRFjiD",
  "key7": "5xPqyB6Te2hshuhXYeFrL4tT5zRhi3fVabhmT4YRXZpbZYuNNYQnjqHa5Yjo2Vyc4vNUkJPMy3V48dLRBcig52Xx",
  "key8": "3z8YGXYfYh4DWgJBYQeQfkEn48MnSmxReVr2rpoo2YiPVX3VTwTjoBQFRVhMvQkWjCabA3yv8LAJye8fvsQbYGLF",
  "key9": "5gBr5Fyp4yAM9xVWj4MRxwapRxmvLKZnH8s7mujk89So84QCuBCwH3y8gPKNA4Gqr1aciBCQFpdXL6szQge2EcX1",
  "key10": "4iuvThWZzyrK8HkjE6M99mjoAnRXXQqWAb5JUW2p1mLHQXShwHsyuFhFLDR36v8M1nGrmoUeQ1LyDp4KN2cHq5AT",
  "key11": "9QaHKH2AsaMtwZ1jsdQd9T3fppsG3bk9rE1kB9ACRV4kBvuV13krWmcfRYvd1L4JjarUNGfugoLjGRc5eWb9yNq",
  "key12": "45P8TfSmzafrSeF5nSfJCdxsiPGdN8GCGNQY1fHbZfr7wjiE5wXM2mx5VMFGjiXtF5ZC3ZtBYxQDtMeuUd7gfffk",
  "key13": "3fFr8KRkAmon3xH7DnPCdTYfmu3Lv8DvgcgLZsitoVE6U8caNLdQR9bBTjgoM8xkGVydZMdnbLfAtJ722XZ3QAzk",
  "key14": "2z8mYqqKZLbmZ7vJAPyKpoP9Un3fRTSURnfpSannZtU9XwwkJ38QnD655HxuSwP9hmdoCxpkQXtbzHn79JevHSqD",
  "key15": "dHLCbrdAAcY6Z8vYdcs5qvpNnW2ekfzofR5p6AF96axrhLNQHPfMw7kgkSb6QAV52T7nDNgjTSsD4tLZ7DbGyr7",
  "key16": "5kthWuYdNau4X2sCKk17hAD9SUUbbmjGK8jN3RVCqmZyHm84hamZWeWqs9ZSm8zBTDQ68vZGb6XDNFdrSj2AfqmC",
  "key17": "4NMKo31z2r88f23Bm6xeFHFj66WCRbrVZRaMZZfoUV4rhpi1kyW2C62MyuEv5gP5hhw1qRbnXugYAV6zAfbz2fEH",
  "key18": "36wZdb3hfsWm43pykd9Ub3x5um1HAzdmJiqxapi23pQTPCPcC9etH4sqUrhBH9jbejat3o9Js3TSgXpQWgtnLvF4",
  "key19": "5mZELyYVtVVa54y5vwNLio9YZXG8WoDd1ZpgumZ9NgTU3gTGbhck346Ciy8u2Lhr1TKyNSqXDyT2L77d9BP2pqGQ",
  "key20": "31mLT341RE1zJ7exc6EvfMudLhZnJCRkQgKf7zqYpcbT3tLCbt6QZP1N3oh9KRvmo9knTcA19Msx9njfdX1wmpLU",
  "key21": "3AzmMoqkTY8FUDYq8DBN42znYwp7e9V94XoiDB6tXeG88acFx5XZCLbxopr31u5yPScxLyPVZKcYGUF4z9pkGkpQ",
  "key22": "3w7S6wyMXGeAqRpHyXEXbWXNx1tnesEp6xKz8SVTmjPM9HdAv3z6zY3X7qGc2zcoeyaZdq2whQs323GQG9E5WeuZ",
  "key23": "4HFNk6RnPyb9UbRx3mcf786Rpt3aiTjrZxpRFRUtXR652ePosTrAyKqKcZwnnRYUFNYFXJFF6fABd6W22AXywq9K",
  "key24": "5xc7xytM3FgNzczaDud8HHaAuvLMgj82pMk3gwM5ghpNUJCaULGuV4LuWm4sJPR2N31navXaQLnhZZbqdAfCp3FX",
  "key25": "4h7nxyVwd7x6yaGa6Mvzii3uwWz5cAfg4WvdXmdKFMf4N8JgwKmsQespLLsykpXB82L8SuYRThSFKcrUV9mcQEPt",
  "key26": "3NSJy3ftb3t6EfRpk3D6K5H55xVciXQxaGUk9kCa5ySvACiaKgQkPidM3UYB7EJvVZEzDVY9sPomAPGnj5F4iEnb",
  "key27": "nCmooBsqR7UDiCdaMAezuyANizmYUov15bVnc6KDDPWTVRBoEN93bRdMj5RDDAAxQxhURAj5ErENvjunEXFKS2S",
  "key28": "XC3TjzM8cDGpKyTHCzy1DXtFSNnuaCpXQpF8QvDeF5y1H9ZUAFUMfoR1huW6MbUFrJuJzsaxdzawMJJHmbNYpcu",
  "key29": "2WrXmtK8Dghq5ssjMCrAmhyiUXtaWfMdqytYK9NEq3vMX8L9cqN11Rojkcbgpfp5UQAKKqaV5S5zQd2KZQpYP6TP",
  "key30": "5Ff4FiDGbMGaegD8KZEYxfswXCCrQ1UzDxtzxrCxGbu7jAVLRWL9d8bSm7udKgKhA6Gw8BqrBaygqrxhxnBuKHNj",
  "key31": "3yr3432wjoFiG2wL7R492XS7r8DKeBUzTeEB54re4eh8toathEWXDMUHtfjBNfB12hpKAoGa8jubLiDu3oJ3rytQ",
  "key32": "5AFJ2Fr1ZAejNdVXukVCiz8mCU7A22M34TkdjPQBVcUg7z9nU2tscVG29PoVH3DZTN73q7gaQWxcKj6m8ZqwyZTd",
  "key33": "45uWKKfWYVjh1TjSc9Zcj1Aa9Th2WYF2zzYYVr2kdPS5jSCEPmNBgkkZYEp9WHD35Bjd9Ga44VGY1tMYhQ9NWaV9",
  "key34": "4F71pFt6kw5pSRJ5bPUwqDcG8z2c74EqXMaRPtTnCjJ4yHzrLpMYbkELF8Bf3tnLmdH2fsqFBGnwkvk7qBXRHTyf",
  "key35": "bngTWeMxsM1jukA5DTmxCbWEs4jyWNsU5NgCsjGkYZhkxF5Bw5T52C58cfR67ZgB2PE1wWtxLu8mszWvy2ayKSV",
  "key36": "284Gw6FVxMPWrEyYUgTVa6bto7C9yfnY3CWwTrM2uW1MAxaW2k5CYeEN5xheMtn57BZrNtUNqVWLBhbe7fQfHXAw",
  "key37": "2QWwoNwhEUFQXovAWhzQ87BQK5kkH7ANhJa8dioDWrk4bwKDHk3yncLSFQdphNFTg24Aa6efboUMyKrmuh6EU9at",
  "key38": "BzbLnpgqJWwcNaL8DPNSDJocVZQmZdJLmtZJYZMHSgnnU85TgbK64Se7vGfKRcG4iNEuYjmURvyRQBtfCMHQCWW",
  "key39": "4F7JkuMf2ghz5uCPEKEduQzcMymBcvaQ1e6Kz4SnkJyU6W4fXRHMov21BLoNvVBaYC5dEWjRYGph5gNzfWySfM4v",
  "key40": "DED3MEyjBV4zt6dGYkk9taagrabXn8omCaJ7u1Eay8yqCj6HfxjNL6eZKr3B5RZR6oa3z4RomBYrcZ1YBLpr5UU",
  "key41": "2ySTzWkypeG2Uvm87dMrVWRNG6PNFCV3SMwFUyDh5NJFbCqNNer3gGNkjiArvseBTv1Dc54J8ehYUUDRXSz9oc3b",
  "key42": "3cjsnpLJfhPGzGvbg6jhmDcqz4LFfVTrW9FXY8LeEquX4xruyqK7qWc3qi94JLeStk5R3To1DYD3ZoKzqH6JjvV1",
  "key43": "2kPYd7pwB56e337HAtBmtheoUcdYdG7QKAeqPvXRpfUpPyVjjvwEstMP9Vm9yBFBxGpmrmWVtvunoPJKtEknMZsb"
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
