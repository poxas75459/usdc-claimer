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
    "2zQU9NtFk25WUsdsdJHSi2fsqckhyWcrbryBiZWmLxchSkzwrFJTbRtQv6wvpuEMV1c3vxFXMVZgAhN5EgKhmWRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66nY2vRpMTUpN2TCNHYQkSmx2jLnQhZ6Md8zDbk6MLyr7utEHPrN1F5BZfL2i4FaUmuw26cTpUefWnJpqpKcaVoL",
  "key1": "2t2TDxhYyDqnKtkuXMRgLfVqWcwNuzp2cmg1VrtcaYGLDugEKp8WjXZLxh2Pa1FqnixpfgFXzTjdef9WwRAoSVxP",
  "key2": "WJnv9uF4f6ZMR7d3ahorFbEVPpeTvHVSBBpQXiuTNEEeFt8tpB9ksornAWmFY5vW7M1UKiowpHT1unh9UmNCdhu",
  "key3": "3jPUADbZqnfULzCiXDku2w4F7LXTAUskPeV7AcD2Yq1XkvL3zPuGM9uBjep4cSDbH7DZTFBgFZYp4ZPiPgCWoQya",
  "key4": "5p65ajDx7RcTdBtq2D5kR7KeyPCvE7JhmaWvJLYXmBxUzJJv9g7ZtFgBXvRdiK9y4LTeeunhjDhEPrYva1RmxFSu",
  "key5": "4EU6uzJscAYXPCY8saB9pa2AJgedHu6uyboecqcuC2E6bMZaP4jVjHwxQuhAxkzuWm8g7uiaJEn8fuBJ8QjPomuL",
  "key6": "5Pb6RPcvQejYDCLqT4iB8ZXheF1uLiJmhcgtrUz7BVpR1MApUYGq7JLBBkabi9fFASAkhUCTEvanhye1feMT4RZg",
  "key7": "3h9FeuZ4d3TGn7peBXzm4jaWf15bMFKNuhPYVgdrwG6ET8Ysm6n7zf4eSRgiEdjvumGf339aFoqVN87vZZLqkRtp",
  "key8": "2RS8xTiQy2Rz9qBjva1JVKkTdGt32xAwUfTXXgH7oYNuso7tTdhabPDk1nAgaLBazQwWy4dmoD2pK4jF1r4mCYaM",
  "key9": "5ESSWThJtLxAr65xXiERdrpiRs3vwUkfqPVyGVTiZ7D4yU845zcSJZWn5xxcDKzhMdgwKBaGj5gFcmwZ3qcTHALJ",
  "key10": "613pyHhCmRgdQSq9jK4wbRY6xEHwsaMYjpx7hDKJwsTa9GwGSWL1NsyjegVimsn2CPYce9uQEsW5zdtXpEG2RTyS",
  "key11": "214NcYEG4n1U1m4UVnFtTnCdQo35F4iksVT47bKHoaXsdYoAizj42sTqYAA6NtvaoviB4zDwC8CJ3Mp215c2Warx",
  "key12": "4Wvc9N32hsU3uut3UaJmxr7c2Ckqrx9wZNBtigGv96pm9KfC8gogE1p53bLmyffMTCrCsxsdMU8pmnwnYfrSpaEL",
  "key13": "8uggegEVujBSxgrqJHj7BCx2DrdFuxHpgLFvR71v8imgPrDVzcjo28otYFqwbsJVpBGJgwR8q1mAeQjTskFYB1p",
  "key14": "92FKzyEvzc7d35afoiUS8fhrXWXayu75kSFe9ivL8tAgQxEinGG6cuy7xjWwE9w4pwFPD8DNjPn1zUkDrwidPh2",
  "key15": "5iZtYgnQaRY4KbBBnv2ujB3z7A3Hui14mqruWVniz1PHnpavfMQCDHU5GWjN8MDrRzRuUTmDBECmxhjW8e9fiFGq",
  "key16": "39NTahYwsvgTpGAnTZMPUZJrwZsYn3dphbeJrx9UbH4PFRkJHU3eXTH6mJo7o2SFDBbBqVcNqCAFUzawvmbLYhwj",
  "key17": "GEpXZ6Yz9g9TX8pLBQ6YT74C4NRWTG1hKnahfAHP1ud7S9N9XrVE8F5MrSQLMxJT4zSBnyUUqzFz3H8n3eV9R6m",
  "key18": "37Uq4UPiXXVNehJduq6TgUqDMu3B8obwYBcMq4Xz9qnGZCcFLcRstZZHHJgxDdraFTFS6FQgtxse7ne8fPpSmC1Z",
  "key19": "46ucpKwjs8x6XYKPZGE5QtR7Q6dqt7hRGr8Ec7KVyD8saCy3GUkREe9WQz5TBbxXSkv6qt5EE1RGb5NPj2UryzuV",
  "key20": "494QDiZDqECu4ZKtmZEATPiY1zviDbhJn9U9Shaja2xuXeWqPaeraHDgDMttCgXJ3wPnQygcp1isQcZf4SHcy18T",
  "key21": "4tG17eR86ztKR7yCnJVWf4twzRWjQHUp2VG8hf2StQWuwcZnqzXhiTvbz4aGvFkbv9Zd9kfLDLieiDescCJBtQwt",
  "key22": "2X2Fqj8fMJG2NXhnb7oRXSSrdd9kJ7p56MUr4AG3c2on74tpf88MAipxrJ9WtYDn8zwQ6k9MG4BdQgrxvqHXnrM5",
  "key23": "3dJPgz3FtT3vtAaKt7YHEfHhRWCaunrVHmE9oMAy3ufynwtpZvYnvRnD9osycaUbPqWEtozCfDm2gGqJX8dTZaaM",
  "key24": "2FhL5E9sEg47RHPv6tPzqztXWb7Q6VFHdnzcUY397M5h5fMzzi1jTtwcbRPkSXZZ2xYy8apQbe5Yzmc2XXejmLDb",
  "key25": "HfZYgcgEPqodGyL9WM2ENDa7rfLFSzbwSLtEqXLgme5AqZ95369xBj7GbxMo2tZFbsroQny9N3Sz6ajNZXwsvoW",
  "key26": "3Mt5ywnxr4y8Ct48VDmW6jLJ4a9wTinJ89bDWuwbKmrCphy6y5TfDxZt3oHbXx97yLTmaPRDbyNrcKa7NrzsEt5f",
  "key27": "4fGZ4Q5dbu1YYrbf1Y8PTNLbqGxFJV3v4KdtcME2U42ZJpiiK8WvPc87TwtnijDzE3xqpNnDESqkwep7Yjdjeaa"
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
