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
    "5sGkZCA4MhG8AnMP8nDJLm3VH3MxEmqvxrjAHniG7F2Jx25GeBCjRSt53Ekdcd2Z9HgPhbEdRXFvLqY7Hw9Dk9ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dskypbPAuVT4p5P2ZjB4Cga4GMiZNwxADupwm5qeTiF7sWx4VGiQwQTYtpebgM4ixTQtgXGWWmpsMRW9YDCsoB",
  "key1": "3MkDiycd3uMKJYcPbeywHR5Dzdqp3JZmvdYepD573EAGK95U6RfhHMooGSzJanC2ebxSHHqv31jjnwTCc6BJawps",
  "key2": "2GWmXrY3XydHUazgsZEwTcqdsfSv3Sywfk4QEZTjsR4fJ8VeEFTvWWJnH2QTqxEj9MHKk2E7UH8DYhdFzqiK12st",
  "key3": "52uix8xDVLnSD8gmCyzsG9fd8WQCJBUFLZbv5pMCrRRzzfg9JDnawacDjoiuMPtHBu5DuGd7q8gpQKB45XZ9p83x",
  "key4": "4u4rLXw2jcjyZ2sNF43DX99W5DBdEeaEfE4QT21TQs24yirf2N7EF4wcttAUdxs6nREprrNDC2XEsgs7Lj8aVugB",
  "key5": "5NgLRChM4VcT858NkTdk1GMe2yxKkUPm9r67Zwrmwme9kEUhXMAJ2FdAwQt34zkTKDdkhYCL8az9kfxsSPpxBon4",
  "key6": "38iCYa3yTNKR2LHu6ptfXQM7yija7mVz2pdT7Eo5SNz91dG78UdDeYXdxVtEwogSQ7iqWYvSAgDQD9TRjMFwHPwT",
  "key7": "62rdt3b3sSpD8vNkWbwujs93Jgrxy52oZywkHeUMzR4PpZiEDtRoNq1FHy7aWbUzHq2uiSCaTzrdy4agMLGaLeYL",
  "key8": "4w5K5f6ip9UomBmFEHfV1xhoZsBbY1CAy5p44ve72rMmgkgfAhiix4fJGFLNBNaKNYSqGwRcjpym2jeXoiPgd8s5",
  "key9": "3Kg4oM41rtuEbosM5L7LCggNVqb5yP4NFiWkfnn1oB2GbBHry8gd24mY6vvSqMiQTKp3QeKJSTdzrFfE57Csyn1s",
  "key10": "4mLvAeX63XSk2AgsFJ8DeJJTVbV5PTDRQECNt9dsiKrSsnQzVuHJ1SoSZKPCBQPpga9CmUvaZgub5L6uUCKu65k9",
  "key11": "cw8hQASd7Qat5DW8NJFzbzjGGf2grPAtiTiLmJLLKKnsAfPSvTxPyo8DHbNnRBEK26AFaNZmanW2pQ3FKibCqC6",
  "key12": "4LahkTPQYguohM6LBPjYv65YiXfBsfjf28TEXJwuKdPhn7c56NgshzmhELWVv6hdFUgdPqHyEHprLisr5SfFpUtA",
  "key13": "5bDHCDkiRmYxLpFkHzmTEhzNNDNHbdorq7sNfpVzKfeoMZKyWYzdcmKLTLogbjWNS96ruui1LVZhC1eP6BXM4B8k",
  "key14": "2hARbV3fVrpw7csiWtTdH29YEWVxNnm7BKjWV87DALVNzBxgEwnekjGXcEgd2ErRgUJzs2UWbg4TwxAARs8bX1H9",
  "key15": "xdrSLi52EpritTH5VFhKDPCJTPhWrPFC4eN4w6Ky7XmVujyXadXdPNTFZ3xwMdtNu68X9FGEqLjEd3LtZk8a4We",
  "key16": "5Zar6PS2oAKztgdFCRxtyx8XyoRKYk1LjvLm3e9tFhWnxtua5Hj1EfyaeNGeuGdXzqwsEKmXWAXAtnp5ezZfRMmo",
  "key17": "5dZh5s25yiny3o1rbXuwLqzbBymBwTvsfjC4pkkRKPiaKhe5h7HyXpCvZFffLR4SSWpEhqZajyRcw22RsbvY9zC5",
  "key18": "p6Z2huUADth86qPbqGfVDSm83FGsMA91oz9LEEUxVExRjrouNagn3ZFaGnn8k7pRqF5WmR33LAiN19w6FtHmsDk",
  "key19": "5vuJxeresitvpfMhnRaDCzuyzAKCSEdod5JxUkekcvR59G1svogDKHD4qf4oUT87erymbjPsibrMQzTf3HM2mAyf",
  "key20": "5xbKMEtWPxFuesXYQNVSqk7B1Mpgh3gBXWxcB3EDhA4ND52vgkVu4VuF88vrZkRBXQ8JWEm87n8zRAGFztRoeEwY",
  "key21": "2CamyahBzXAq6UEhdawJJyhxncHfmUtDnBrV5knxiyB6V3CMsh4JTvd4gkx8z2kNHMtFXRQuQAEvBSF4wNzufoPQ",
  "key22": "39cGkc78CQf3qdQytLzsRuozJ2J1if8XPpaa1LpKpPPGLyLadKB9DGU7edieGnnFA8aGEAfSwh8eXrLhVoFdNKro",
  "key23": "PG29KHxiia1L59pSUAaiWhN4uNqdraxRE5grxoVekLiMiLGzQUMDfVF2uCNSiJkCkfNd63rT1ok8B5PyWYes4nR",
  "key24": "1v2d4LDkURzj8GDzoXdSGX2c3Yh3bf7HWQnJ2nbrK8hQcptUUdbPEUfCeBnMtxhvEyBnEuFtmdhRxnDgwThhtDT",
  "key25": "3CJbtd9M11FcGjWh8S1H3U3tQV5z4qRz4T7xz2QGts1n7MsqLLk8pnCXTjGtXQSxGKhz2SBYX4Exc5o2vdpUtZJf",
  "key26": "3ZzELjSDMAqs2gKig6nfH3TXfzP425VpTKEHdJBTwikdQb8F31o13hxYJHxwBsbaYrSvanygdsg3QZZWxbCrAHUs",
  "key27": "fFLnjU65Sd48afWrbYs7o91yhSFtc7qTJzjdqqw17n183cvUrY1BQKEhtGzfBQwyHuzrGxfT3FWYSMVZBEB2VBS",
  "key28": "2D1hFaspVv9jtibSyRe4r6m2Pu74vaoVoUXwTiJRekJ4W4aLuAcnvGAdt2RY9fnPZqHVvf8woNvKEk6gbBBgXthC",
  "key29": "4i3qK3b6GcLrXHU1myaR9swRNJ4Eco2paorStLjGV38zX2hZcFyprTVEQ1TgpwH9HBwZC7f6HtXJWnb9mmpSP3ra",
  "key30": "Q4JxNohMurjyjRfXZadrw7tRqZRTNvsPChZUasu6wPnzkbEKjuWGnJyf67dFWECxzFf7MbgTcrYuprfXYtjPpkt",
  "key31": "3sWdbtukiqeitW3tWEhMCidbNzGRVRMz19t5GVi9s3gTWDKbrnhpBKCaDQfptWh1H2Kr1zMmRFBuddwwYc3Fc9MZ",
  "key32": "2nkfgoqGFSzHLAw98WXqbxTkB47gipTCo7srW7xPw4P6FbLWNLeq8Bi756bXEh6ktus3bkJfffwu3CdxDasz16ZV",
  "key33": "3ezk5VNVQq7AP83Bp6oRpZ6n2Us3vCwhXCr59mHVNbbnqdZXvczK9S7jEJo8A8DMdLULb5M9bUnPVEV4oW5SwzVh",
  "key34": "5PL6uyN7rJKfuJyXEJ3NZvdzaatnM8KCmufzsipjTdwMCjoZnA5K22iTfxVLHimNPEPLLrfXKJWqzAGeQYTeosek",
  "key35": "FKqZwBs93WgdkJW4ZcsDJGsEdLaUbdDeaGcjAW83UsKkPC1YznR6exfxz1bsovqGB25vRyv1GUmUhTYhouMyawm",
  "key36": "v9ADnwWQoBzQ9r3mHuUVsuYEqE3414WuWQikdeNJ2WKFwm9WYpNkU8fhZrm36oWoByLfccNrKvD4H26tzRmNMjH",
  "key37": "LmCieRtVqyJx7FKqhZ7M7p5ugaNqJUmvE2iuqzwnEY4p3Zxjbdj7FpQkfPFdvj7PW74eu7PdT3uaHV1rPXbCEHX",
  "key38": "9jFRqZNTV8LWFKcdwASaudEDDfUsi9qZcQbSVADSpwhcYN5G6LqhNyoBdMyPmsrbYp95k4hthN1vd9xY4V9EWLT",
  "key39": "5yRNGUeR9pDtiRFGhv4txgJtg2F5gBHZQFb6XDErPCxDiCyJJCW8kt5tcSQx6GTJgXjL8EyEA2ooa3FRPm69EeDW",
  "key40": "2Wi79uuDE7Vz7qXPbhyGYiUNtvExsfpuTgPVK57f1aq2a3tjkYYyGrW1E22VsLzxTtWRWpV7Kbz51udPsPaLcBVV",
  "key41": "3c9ThN1AV79paAq9jqDQVY2e3TAfJVSrNa6zEHeZjy5N6ewBFMUTsZzvvC4VdYZFfatxcMvWkt54NMfawTJvS8yb"
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
