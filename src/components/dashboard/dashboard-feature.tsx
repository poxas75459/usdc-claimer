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
    "r9pmVbz5EoP8PTLfBnmMy9U4EUzJrLTQ3c1RqWA93hTnsTX5TMaitUMpDcbxHHzgZurHgTNzTbaKb7f24kNYf5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aL1SX76QRrHLTRH1rKhf8ZjZxz97aFdYCLh77hWS6MJ9xSrcUuF8Tv1n54GFi4ZtuYG596X8GbpetyMg3Pemqkd",
  "key1": "3PF5hWxFKUuFg4YYJ9C2t2nBUJCAb7piUfcwg6CzBVFe6aoJMvw8XPznnSr4NY99wp848Y14fewEfiZFn3Liv5by",
  "key2": "MaxaepkCngEQZgGJhvWma4VvBRNeHKqiGT4UFrPnVL9JtiYeRhy91CykkG4YMux71uVCCdTExqAu1AD5XehCxzy",
  "key3": "47EE5j6bSNW7QESuW91FpTLCPCSNAqq4Pba6g3JoCc6pSRjBEcw9Duixp89XehUoFVvYavaSsLZuB5yxjT9j4vhk",
  "key4": "5nMGrYmPSk6gLHK96czugCveaX6LHJbHyEq1tManHkcmxhfjQDEFn6jsVdrUTHoSwRqFboWeFnT7yFAz8mZbPccH",
  "key5": "4BfZSY47avqxhxq5z4ffYQT4vUF84qGpduhZB7QxT7pahd2sMYsPDPm7pZeqagcursd6Zrcy5vQJfwtBXHneWaNX",
  "key6": "2sMVVoMbS82YFLsxJxaKu3wfnCrNEdmcGHLqnx1sg7xrV8bawY6pmDKCke6VqBJ5Qu3UL7rUqWAM3wb9gfjjQVBx",
  "key7": "4G7YUcwVvSAApcZvKX18DfH9PVLYzo6rBYCqLb6t1FgxwHzqyL9b39C7jcrmnVd6FeiTN8U2eG3pz9CyEi8uTCtD",
  "key8": "4d6RdtQcKTiwjASGJWQrmDZFE1V8wTnY4nWESTWBo5UKz1uS6Y8sDq2mmCCeJ8nTcy3DtHhKbvuRP71ESSdSP5zD",
  "key9": "4bb7HjTgqZNcjQs43Jcv2WAeVJcaoxjUcgxxgatZEA76RNby9ESGZpSzghYFj42u5swVq8x85ai8yJnmLmpASUDZ",
  "key10": "37LqVr5cwSswPHZSV91e2ywLwk1i6HFQDrzYnESDJM7CkLPL6SNtt6TFh8BFKqAc9mFVJHGife2qnvARRoTRWhLG",
  "key11": "ebr1kG185hBo5FmRQERjfFShEpFN1FiinfWA8KTCMq2YRmqkgkvFeffGeBkzReS4D2QgDEeRpYAQFBFTBn1ZdDQ",
  "key12": "3B68ggNeBRzi27aJ86fSk8aJNEbw1FBN8A9mAkUr9PRARYj4dhJgsewFL959k1ySVTbDYK3WH3sCYCmZFfxx6ixB",
  "key13": "1Bpcwx8fRrZjcvqGWAz1UPgRV6QifdFptAY3ubc5G6RePoGQva8XwzEvh1KX2XNXoacMcw8azZpeSpGY9oXqNg7",
  "key14": "4ymngetH6giaHuXtGfDeyVkMaB5MWQ3MoNk36by8rvY6uHgAQ2Zj6ZrcxVvPkBnvrv9FNpTQYN7mRPWvKVYNt4nE",
  "key15": "4MNFC4m95F27bQGRmsJT6wxWyojb4sXDRLtzVnaZX5fpiuFEunZNUwc643sFSTv4ntumCFVpb74q7r4kFki12KBA",
  "key16": "5mWopBSHR3d4SihvuyhAcuNiLdGjNHPzJXYy4G9C3Z9fw9qxEuX1RshXuY9wUJnxuzS7S5Ue5kjiYmn9hya8MwYf",
  "key17": "LufKAYsgrZtBofj2PNBRkGLRKBz4FxLqLkKRX5NSbYBPt66UKoUNn4zegT8VTvFqQhaakYejPMHPVNR86ZFJGU2",
  "key18": "56g9o4mpgEckgJfVayfoEqtLMjjxXdcVBP46Nr438yeW3gF6dnNMEQuGuy4FNTjgsJgZbmHNT67A4AHBvn1Ado3W",
  "key19": "9VU6dcwu8d2e66v7RdeR299PtnzvGtBJYebEdgatXTR8G6mfYHEDpHgr1X2pdBTtbCfFXvLJuyen8jzaKm5n57b",
  "key20": "2FpxB3LUWPpLS8yRRn4gPsr6RJpnb2decTEK9f7pE8EUwy3MDcZrkqshiBSrfuJJs2HhQp5jKZ46J2jqpyagn2NG",
  "key21": "5ZjT4T4YuggzAhnJkgmyZqE4cEBbyYrgK1KpsCyHgU51wCUSu2ak8bGSkwitmWgjnJRTLHwwpE1PUskTuwJVWBqN",
  "key22": "Gz9LuWT4NMaHPhTdD23Gbr1VDKgRY69WiDSsweaF7CyWMC8o8h8hAgbVLgwNjFEM3duQT9CNczAYZrKfXXHCnk9",
  "key23": "3MNL7jfdRFhTvevLnaznHVS1addw4Nx4WnzsWEPHdKS9GjmRdeEfFcnWx84vXrWiMkxrq5gP5nYvQVY15Y9aKuoV",
  "key24": "4Wykdz7DvwVAhSkeLZocRVf4LaDQ66bBMw2JvHj9wpVeVXUXd8q7ta9UfTM4qbjbCgTcYVa8xnUCHYF9aQMRPcex",
  "key25": "3Qzx9jZykL958BvGjcHvd26Pp2XRJfMszbDCXGZqHwdZGiM8SjKjbFhFnUB3KxU1oRbNBFQ4mq1c93Yzb3PsS5Zs",
  "key26": "HDYLr37Bh4GqVwshSnEWaJ78g3KgPfaV6gEsyMoxt2UEQdv3p63sMmP5kLHAjyGhwKTnRCqd4Tg1R3J6ybFet8b",
  "key27": "rQ3aHGZ3w6bARh1BG5J1ZxhR9d2VVvFcHUyfuNDBASJx1WQYGUci8AbJCEJKszmGotFAxG3LtUJsc5BSc2xhMa1",
  "key28": "2v55Dj4uQfCJNf7gRBtXw9ZXCgpZfDsUpo1yyJYCPGxVTsSK35WHUDsySpGa97LjGycySBzskfHL7VC2Be1FFHZC",
  "key29": "5GL6jGoi4o99238qVUp2BmMWLChmF13UfzGjFgjvxVYmiCYYG6rnnLq5ykKkJnfyNskKMJ2TDK5qzZdnneHpVU4S",
  "key30": "4xdL2Y1Gst4Xcfu5fQJQZXhwXfu7Ew8KyxhDB1ENsCT8c7YKCGGc8J7UtVQDuYa6wmPvozkogUfPfxxghi5q6AXu",
  "key31": "4YyrGDetYbY9cEaaqHo5CS2wKbYadFjtfTnr7KQVx6bRaPLJQaoyVWNABRpFwUS9MbeRtRr2JwnWuJUU6yo6qm3U",
  "key32": "6WLnftJxq6AnVGJBKoKzPPu37UkWbNVcMk2kQcpY95vc669ifGihRtEV1rr45BN88sNCPwtrQQ1SkeShDNWaDgU",
  "key33": "2Lu5XkPhjavSRKJRf1FNMsAnhRxJv74VF1wqKqPP5pkog6MLGMjMEbMiKHnfBBKykzLRw8XjprLQip6UoKB8KuJ4",
  "key34": "3xN1mCjM7wa7LHbMLz93zsX7AgXr4aYmQVFGjwNDSQ39VrZxcKAvPxTpARXed973CWewW2anxBJug2YSTJdaA24N",
  "key35": "4TGxcheBVQ9UP1dc5aLhgKDNSWkhPiphgp7HBpgUweYCXmRnqPwxEc5Yj3TNnSM5HU46g6JeGE1jdnYfm1675geh",
  "key36": "CVjFPRTHz31YNGjiBWPCoKiCxFvohts1EhRaFw8U5jpGGbkZ8eanSvuKM7enT9ySGjDKVsBipoE5QQjWRsduq8d",
  "key37": "31at5a1KRVUkT9WCYDYoGLreqRnzB8j68W1TBNiQMXPDbcPknYdwyFcCwfQ5oZJzjqYf2s2SEyhp4tASGiiAdMuU"
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
