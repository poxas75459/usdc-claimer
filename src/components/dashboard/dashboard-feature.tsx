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
    "4nKiuXoUAUXEr1Bsmh7xrqGjTF7QmMkpmo7dMTWj1ZHLVagCLmk4wSGET21D9c6SfD5zzHmGKt2THozcN6cq7pjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ycbCsia7Z57BYsTw5t52BaiHRw3mtVaCy7YLQFJADmUYyY3YNfKQ7f1Yo1bZnxPPCji3EijxdS6yfboSeGxcKP",
  "key1": "3z7MF18SegvdyEVsehaynPp1FWSLiFPXEA9c31xLCRZav4rFcPAfY6tcWvZ58TcCpyqM2u4nSn2BrhXMLZPncWfi",
  "key2": "2V1Vnb5B8HMaeDxEEoBhuojozSK9sBX1M9hdZVG8SnqEqZdAo5wBUEKjq1atyXsWAvEPix6Hnsg7HMA5yyMmjTs1",
  "key3": "4ADigKRCLd1dKoudL6yQDDTWKGv4j3p1EK7pLizaDQok9oAUfb3czR55wBSRmPCzEZFPQf3yUXTVxajhuVjPff6",
  "key4": "1CeJyiZWHUWrBXQg9LuPFKyKDwrsY3eMdBWSicPc5nRjHZwRFQ9yYRFeA8KbYPnvxfH24QiVQWPnnejg1RfPTHQ",
  "key5": "3Gj6Je6WLzMy3ZGnz48tzRohWL2Fvriqy6Qfe26w3WnfsZLDvTDPoGNnoQDZ3UzCGL3Ceg2NfJUBYnXTLUDunHZN",
  "key6": "4e8x5aXYnzcF8aMiEy64FTKbKKRAaq27T6QCd1ZRfs7i4ZBERPw26BUEiQSaY9Lybt67iM6FtH5ErP64NyKTjapR",
  "key7": "2AwY8mvhvvb9zg7cGw5b13R6n4y4RN5fFbUuJK7mt4fucmoLcrAXrpkEuYNRY8TJ2zDZXFzTC4hgwSQLyq4vcfCi",
  "key8": "iCuKLUs5nRnhNXNcuPAAkU8AU9k2yKLapLE4F6nKrNLv7LC61y7bG1ZjBRKE7agnm7sWA7adERXrdvoP4frYDGA",
  "key9": "4c9WXirAeq4rA7GAMaWztAjiNvivbwU1372C5hwDuP3zULATKba375xcbQK6rwT2Qs8HLnmM8cyCvGP3vGansH7T",
  "key10": "3XEtgtgafB8SFLnDVb1QgQJJ8HRXZ3hyiCNj8oBxVMuuMfyvNFHZfvgvTd1G7N2vu7YpkBDiHAQ9mmVfdMeLzeUZ",
  "key11": "4PcotdBZvyXqTP3MijmhXidDEiw19gsRm14MHKrwVXDAX274QAyxG1DkYoerRbZcSTmrJ3SEGzfU3WisN7QCMqzw",
  "key12": "5KseuGfHyJy8DsUtJwut8JkoTvpC1xYeecV3j84WZFt5ktDYRGTyD5KCJcCPchnFz7vfNFFb1nm5DnyLq3Td7ucX",
  "key13": "4yjiBz1RHoU9TE7TVAsv2oZZ6mWPmDjC9u69svpJrvDkRje3xY7x98cQGo9q5ErZxjb4ZnXTN9x2NBb5qFguXgBL",
  "key14": "5MbKhxSk3XaMUcFY8UjeeqvV1RPFZHArW1HDrwEVXY7sUHfFra8jU4hrpLyQqcaeZdzsmmVk1sRqJriyF7NwJVVj",
  "key15": "2StdwXyezTHFEGSC7pSqcsLnywKQ6c85wqrFcHxUYxMKJcuA8keX3yDdKX6z5CvymxJYfD7BnnHWnZCs5dyGpFqX",
  "key16": "C1KhxbNqf9poC5tqEQiRjnc61y7WYBHb4u4Z8Dzf4f2od69eFtwpX7HFkfCV6ZDp2Zcqf3cZkwpzYceWfHP3TcK",
  "key17": "5Nu1Z5WhiY877otsc82HJLeDi5SDvdmEXpCbJDZ7L9XS8gdaTMEZkZ6af1bfRmRdh3UqcqReYJ3UDh58cubkfNoL",
  "key18": "WG5HTjPpQNPtFEzhs6jcaaJBTU6y9ZZtumEVP3ZS5LEY8T7xvFwASshN6qeZjqcXdhKSGSdz7cBQwcZLKp3Z7NN",
  "key19": "4xbBGkuK187rug9gpRq4UTfHQZoounXtXrsb6p4ffCo8DVz77KjzKFD86xSTTwr7yU6NjTnSAVcWfXuNL8HQA7Q8",
  "key20": "2VM9CRkf1gtT2KwjWyPE89NSJ1gdtcTRucFczD9nsxB4FrKQR6VXxuaHQpX329kvUGkuRShhrqf5d2ywrNsG16vi",
  "key21": "CF2wdoyP8bVBKrTmkJRVyKa3krUu5mZL8NAxobCX83uSaxtJkJoiv92pGpUX1VvMfERxap8zDLd4pUt2PntriXk",
  "key22": "2B3cGnosnqRGVjuJXX95bYMNY59XikvVJa2pPiBLsxexuYywdyeDHVNpzEjY9ZYi3bqhTd8k4qWxmka7wc79iCLk",
  "key23": "4AKL1iLXLypQkUNXVA1GgWQzDvq7f4bhY3owVXSV3dgf2eQZyMuysvQFfTJ8c6KMMjncFvCj19njN9UUDsGs4Qr3",
  "key24": "7bB7fCzQf9K97YN92QPwttddeqiEWMykk3xcBRbTepJWP81V8vSZr7tRx6WPbxycrBQHBaa6P3anVyeuunHvgX2",
  "key25": "LzJ3TryfFYgzKe13aZXLejVt4V7YuTG6E9yFyy4sG39qZnoXccBm2Rzyhsrdhar4kfXcffhjTu674bMoWrmkn3j",
  "key26": "5GVzQeQeMfHCAfSmqcR1E83BUCyziuxjzLYisHPze9JE9XhkSeBA8RLQDJnfUEdZqHrmmxYvW3VQubtBw4yBMvyw",
  "key27": "57YgV9hvKUCuA62pFWmVH4QFhCxLVXb5zLjnEUvLvFJzbSYHP3i5Y4rtiQ2wrEbHm9RKdNSGngsBEkvv1vP9BDMG",
  "key28": "4YGW8iqB2QNDPq6yeMdzTSmgjx42ev5E1MEguiiDp6FZss6RzVwf6TXe4AkkBWoYXG9rpBZZoh1MgfvzF3yDhFP8",
  "key29": "am2jSArpDj6cNSedDQHyB9RTeV1ULjLM9UufG63ttKJY2o5XB3jE7dX5vzdwGEBMdavfbP1sCegowpWjLzvXo4t",
  "key30": "45Q7kMfMyyzaGgx5G4aQzx9hKePDZbLcmYVKcvtsiX9U4RsMgR9a8zCQueHeskYYQR5KwL1RAdn5i4BMvDtgMNGa",
  "key31": "4a5bGfJUqesDicJG27Y3t4qwuxk3LQ9zFrWM4uwdsYzfJ2j1Wrer8MdFBCpHHvAaaUssdYxkkfrf7wR2fi7UFCns",
  "key32": "41BwPVEfYnjMWw3CoXFugrC1hy1cjEXiNwbYdTYgJrXteNzFji37QGkoEevc3T7m4yGQxnqAN4sudn4NuKvd1a4K",
  "key33": "2uUVo7uciW6QLLwhkU6LuKuwDuFv7yy5De3kxkkpdS9ooaf8vAjsd5QYqdLHbNf9seUXegY369bBDdL5cy3BjNcx",
  "key34": "5xiUiYmhsUtqFFUokoUVtWw4G21vFSt8QmFNtXs1pbKaS85Ty1zHuDFza4PMCqiPkafY2DhVq7quH5pq1kWjnjX7",
  "key35": "26G1gQPMX5wPzQP194KzHxiKd85KSitiNYy9y8XFR2SNbM7LGKSWumhhTpCsVAuUZS5iVLirVDrvuAhxxMDaLWYZ",
  "key36": "3YnRn4FdR3LbYMswcSzof6KfAQscCtHw5LiKoio2eAWWdR41Rq6ZSxXp9Dm4bSa3RtbynPshgCXDNMdthHvWE53M",
  "key37": "4AjcKGvm4tCYRPhLfkiktwy9kNNZauxnjuciBhVKdCMoaTgeS8WB8UZRTsqeKKez4r8MNHvh9mfy5maLj7N54YWN",
  "key38": "2cw9vKfc73KabRB4XvdAMkgMEsfhZoyNyff8vC9c1Er4Zz6VPv2nfN1viwXersztjewGjdVp5VicpQ9BrC7MhbKk",
  "key39": "2SugtKAauTLGdofFXopz4fF73EjsuaboqXUs6EKs3mfNAJc96NkdHjo7npcyt5ztVLsfmz17uFN7aUC8GZCFT6ai",
  "key40": "mAAz3qdxZTQcRmqPxf9hAREGtxUd8LyNboGTsjyVauvcsXdLngeS8Zotq4bprCovj5WB3NpYq9Ne9FCivX9oBEM",
  "key41": "21wxSBe5NboGZNEoCzsn9E9rc8rPDxnPrEhDnMfy4xnzQhdbKjKaW7QTK8MHK2qfZqw4ayarpNnrJ5C5GTnRBh9F",
  "key42": "5PvmWcR7umHguzK9GpjwqorsCZgLq2u1X4ACmPGszHREa2v1vf3v6JNsZxMNjV848anPwXPnfaf6P6j7UcswiwWQ"
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
