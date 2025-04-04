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
    "3qKurXCyL3maxCsPMYcpPJnbStuWMHhi7GBd3Wof8J7N31mhnJBDN1QmXdfZWG5LHf1Vu1tXKdcF2ascR8GBTFxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1CkM1GjHyvNdLQkrwEz54p5dRt5Awm6EfXwdMSDFhZeHzoDXbZwas289PspBrMJCcApmLJm3LtmN7cMQSK2yLa",
  "key1": "4C2y1AB7QfEDyiRzswfxSZoKpy3Sjn1tyTonJCV8Xqzds5MYEp4Wb6JenQaKyXYgmTZ3xCzTKE4AqzEBL17C4dqK",
  "key2": "55bFJJkUgdZTYoJW6E5peHVituZ8Q56ppTBUNifaSceRK8xAouQaixmXZ4hK536XsChsaLPPBvFECp6YHDctWH5v",
  "key3": "2msabXw7b3PsKs8VXpeDwxo2eQTPMQFSsd44guBH6X52G82cpiL8mP3xM7K39UutQxiMpoRETiDFxg7tZ7GHMB12",
  "key4": "FPJX4NAnNsrwXTVDAxd4qtVSeSGmpKkyR3X5cuF66vStULcSBMbM8pvMge9y87cUcab8Ae9tDsAHLV2CHoRLH1n",
  "key5": "2i6zSaqBsE2rQYqiKA8S6rSMpMjToWAxLdq2YYyfJMe3pDg8NQiMb9D9ekp3MFPq2ZiBJpkh9LfTZytherr3bF1M",
  "key6": "61hbZRwwZSCZRR2N5qv8hMEu8Xyi6syvryZUGgfPPzVSe6XQdbHkk32iZ2F2XpDFGnAqmEkHuCKAEeRr6hhmDbMv",
  "key7": "5JQC4D9heo9HYbxfjvKYxJWD2r285FiUwqmUyftMH6dJTuBLxM2FcxRmyTvkmx14J3dGGFJRiSDHCN5oFGjqAAPQ",
  "key8": "2RT918oB6RiSoRKbESTzhBacCobfKsQUnU3CJnQ6h26Df1A7PZ4RFVY4iAzF3fQvkKnnyy7E274kjurQKVWCWtnZ",
  "key9": "3FPUb9ESgixSrFQQrpKcsZEpdhgki54VsfZjKFF4VezQB2sJRU7MyW5PAc9EkGzyskcGTrhdjHQNxdycLoSjDTkw",
  "key10": "fHtvv8pYcZYP1ga76Ht87gNDJFinQeFxHqb2EddyYieEH5WVbmKTLjzaziu7kG38HHAthJ7eepe7nXnhrLi1kCn",
  "key11": "5mq7vfcKozowWABFMVJgXPuEiHrzuP53NLvHfdMsvqHikqwkHFmxvQZr4EJ9WyRXXZHcEryjq3Ddi528NWY7YH9w",
  "key12": "3fxvDbiUzFsaMufQ285KQYfGf2bTr2khzJ7TrsiVd5parN2s3qFozwTU3RP34JtxekTUEpSyW3jiDw8749Xz1UKL",
  "key13": "2GC5jzJJdLAbHt4iWm31cm44iWa8JJCqph4CzYuqaN985SN4RuSia2WFwsgDDJ4ANavKAZaUCBZvDmxyxwdL5Vrw",
  "key14": "5J87o1F1Q2AzSfFVQLWR84oCwoMdQisxSiaNQjfkv7EbmKKVtdNGr8yr9uJc4fJ7e6xMPm97BoDjPWoRQU12G34z",
  "key15": "29eVoqFZoKtrY7KueKmXLLmvuHsHCd7VHf75ecx1eWHh9Uzi6PqiPPaM6CGwwXmXk5wGWkXcdFHv6HaPVQjSJ2QG",
  "key16": "4NdPCJPp5NG2ksgVUbZhaU1wA3ixBrXPVYj48kC6a4HT6CkJzTn4hYvtxZyigP8U3KtM6VTNZd5gg78brWMK97yr",
  "key17": "2PfS82R5zATVpsTzzsqYSUNkBKfvtQSkxhhHXxUx3yuEBko41iCgU3qK535ZGrvWyPX3dqZvm7dcV9ga5PYWqGUt",
  "key18": "3UQkpyjGWikUTMfvk6f5mgLtGn8h4SshcAsbrEALkEDJHE4vkLJ7jBKTPN59aWk5ftHF6ziYVT5LCBjzhrrYtVGH",
  "key19": "649NUmhc3MiD2uSRem7DkFbFMfRQ5RH3Z6SutB8ByynV4VYp4rAyAsGv2yeuyvx3vjkDqFpBxpudgHhaq6uQzQrY",
  "key20": "3a95CRgqDfBFzrLpDhasfePM9TJmosagc7FDJWYghjiXzPKpCiT5X5NESKWgeW5Be8ehbRMKfs4EpGSosiDTScmw",
  "key21": "b1rCSpBqG6facktkQKPeCSozt4Wk2sAznHTi4RKPWkK7Ukud2jU3tA9PV1ThLBR7xd1JH82je5DXeWA9iRzS3K3",
  "key22": "5GvbSXQaw5aKzL4R9zUjFqgov2A9DbDrg2SZmcxXk9xcuuQyCQosFEHt7exBeeRG1XLtDNLY5knwZvMTR9K7xijs",
  "key23": "2Bhy9RJ7N4UUk2sa4ToPGLy3Mj5crk5xLgvABPidTAi9jA7Zb5exNCoYqgrqFey4kSGS2nJ3SAonBZUNAF9ZSigR",
  "key24": "6sWfb1BHK2eSK95dEtDTzMsKb5SaGN98UxAEta13rRpKYSijWiP4JmGj8JxSH7oDwTw1UR6SaSsw9Hu9AjfSxhD",
  "key25": "46xSo6cKwcMJidKfYqmsNfeZCEpPdtxQz2hDWXRLopfyPE6Tp6qxAk2ZM5LtYE2qUVZZKbjYnh66Bc9NhkPne6Gs",
  "key26": "53gQXQsNAPbJnXJKeohYTwn3rkyFAZsD77iP8PBuCvvnbemCSY92n5kwZdDj1dtB3gY7ZPChNe46qaDpGiEQ2LN2",
  "key27": "CQU2Pfz7dfzBSEGEgrnJuKEi5MigzyBapwAHg5EhBSQihdSvuMupNUPcC2ptZFbdzbBbz3XheAbrz9BtNr5aGMh",
  "key28": "5gZBv3YsuKNwq3GevfrF4sbvSAuy3xPYhKFJwSk7UVbKyVrdrjy9XDAkWSxCxDi1U6LkR8UcbPNZVjAcovhkxEvW",
  "key29": "4Ps9kY7NDt5cvY3TTEb8SJD32uBMgAArWknFfXUsrzsi7baxxf9nquvn5wqvTtABbC3UMvq2jqhUeWRpcE742d65",
  "key30": "3K86jjK4Ui7XWWstT2x6qrVUG8EAJXXG2bXzJ5zfW2HorM7syfPpuHGZ2wELshJW8k8esk1kWQmTRX4gsM5EBwx"
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
