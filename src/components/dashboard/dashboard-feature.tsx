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
    "5uU5hMCXbLYEvMU8nu1d7ckQfrJwM39sRM5xHNFd6CHxHsd71Fa2yLXzfWQq9bni3vszsV4Vj2J13BYSNt9jTpA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zz9T6k1epweHYb9yhpKPnoixWPsae9rUX3hebxP9zmRM7CtLA9qAjxiHsmKQ4hcAfWb1wXi9jbc7Dv2Tgfd94Zs",
  "key1": "62U4H6xPd1gDwUHMdg9QjArHgPQ1DorNFimHc1HdNoHaAm4aQhKGVWEXJiRkUtjEXXDswGQp9knKGgoDDH2uWqVV",
  "key2": "2JBcX2MdGXLzcSbgAdjEUJmGaoQQfUbDhrMDgUxCtar6EMPW5y666Qtdf2cC41iSdMmPeUdpnSY7iUAuSmgWacGB",
  "key3": "4sTH6Jhcc9nxvS3Y3hBrfzwe1GYhYW3UGRu7Aht2hfAcSC3KyzRdcn4EphwZsiTu6aAFpSpjDzWCpgoLHnWvsNaf",
  "key4": "3oSH96wwWLamVGBZE9rjgkhzssPHhy6FXYo9PZDDS6hcFpKdPDN5NpryUracDMku1f322CiuP8yETPkF1KPtpua3",
  "key5": "3LrW4GizSNxxbHEdQfk2byXiGE3Xx946aFQt6fTYVFSeK1xeS9zVPArRUfFqBC3cBgRJtdreuPdfoJ58av77G6fX",
  "key6": "4qduVGjBCuziCrjiqqC1ujvNnJHd2Sejt3JtF2nLpGKBm1XWE1DnzykJELYBwiZncxWqNCT4mCFR7yc9tVeiPy8c",
  "key7": "VWLWgH4Bv2J3amvVTFX22MFunoYgb2gWhQL4CEExDwHJXqgM8cU3xRHnzoPCrmYrCktLmAwWGwP4ydMUFW1GwwF",
  "key8": "4eFxx1wBMGNo1MNytUXnHKy7rjQWUyCWupPrYgzhw7sUPBtGNYigwxXrdQqdcGQphvwN4nwDHHW3gD6DcUyC41rk",
  "key9": "3cfaFBG17F7suCaTShC725wU6RKTkCcXQ5V2XKCoQvge8sjvaoSNsPG9hZT3nVQLU5ikp6i71vj2Cj6doLDQpD6m",
  "key10": "58oBbu4Ayhto8225cbMMMkvMbMKS9uJWjZynEZisoUPGL1seCXZmFP39KWJUkz9QGVFWgFtNxqswZS4gFg2gdams",
  "key11": "5R93XfJXLRZE9WUHqZqHzxQ3UUneCb4vRNQSmkzBnUhY4zwvByvLW3AWhDM97FndWWvyYbM7eg9oxZLz4yCppuxL",
  "key12": "4Nrxtx133nYRxB79L2zCrGXpyZyzkT1tvBubBShpNuUv9CGgNEbHCgPBA8h8pYh6KAHJPEFuKJHs4vE4LGDxsg91",
  "key13": "APWG3aquaRZGwj3uCG8mDeznj67BnriUNLpYPwb8swRsWaPHSnN4BXQgab2HuR79LcrbQV3EgZtujgFfY4A3fuG",
  "key14": "nptYJMiuTnrpwd31E6Dsjs8Ut3zWXdspVsFgntQrdvoMj3rt3Fx1NDehffh251aYyDGu56Emq3cWRsJHJwv8gX6",
  "key15": "35QXgN8DNn8CuEi6shcPNexSzcfzcCwibxs78RR2ovQrdD6xH3K7uu13KRPPqV8WW2MPyJrSnRRMPCWytiwNqR1A",
  "key16": "2R2iWsbDtz6by4oP7wL9GYDmaqDLnbLvBydX1i9F2Q222Q2fJYRmM7okuqDzHfMdVtXVmN96YTpFBXtmAfHDYLok",
  "key17": "2AS2wxjyayjjbgWm3kDF615VCVkW9rTujY3YB9YHkf1yjNYkFWwNdbHRHMRczKpX6kJ8CBeLmkcqjH8uh6G4ojcN",
  "key18": "31M6snHLCL6maGzJxrmFTaesbYrLLZytWPs9nM9iRZmUdkjgFuBWBjqYLguBVgB1K5kjqqLtYDcTrnVFpzwhLeva",
  "key19": "2uaLVsx2SivqjVwBGStzTjau715wTGfDCUjfuxbjGXiChPxVCr131JsoT897WcMwaczavkLtPBGP6n9voTQzUoLb",
  "key20": "5rtUSL6MmQDj6e4X6yEnkpFC69GdVyVVHUFBmb5Q2dnb51uqojyqrJSiwNt6RWYhbAtR5vQ88F8DXzv9G6GJcH57",
  "key21": "gcnxP2degfaX3t3Q6Lmg9en5qMgZ3LvMaGn4hAWuwGpnwbES62GWv1fpyQbxB7AnHyFezkpUoaEynpt3T3CueBG",
  "key22": "uuZ3E4qdHJqWc9ujdqSXbkat1NbLX2gmBiYYYMNHpvo4orqHJRNsM8jcbWdW4XGZey5GPtJQeJVLQsBpN8HhPTj",
  "key23": "3rQes56v7HDDTZSvBneSKHQNtcT9gqzx3MBXATG6TypoQGp9ncjfNbRVegnTyAMkwR5nfRvTGTUFaPrym46xSKnx",
  "key24": "5j4kEPbnymA3BJ8D8xtPNQ2ucbWsiVNvj8aPCdm6MhKCzy5d3ZVdmWiSAgutdLy58y7RynPwtru2RuizYGCTB6Ee",
  "key25": "2k3N1hhbwyrr5n1R3ixZRNto7NfAxXRUZnEJ2HS426Kpc8myi4V6uxhngAviBQYmwHzfh8mLj86GNamXKk5AGzr",
  "key26": "3EVWnQYMhZ8myQQuiZtDs6eFDv9oC6GBNGSkFDEHGTPDgtqBVnzr7FVkL3kxdYYt4UuepzkLVVFsVzTS4anWVHcs",
  "key27": "28MYdKcy3j3htE69vifBGZLDn8qhsYANuvZJqMXzKPhseqmrEocUmwu8TupEuBggAVtZH7YQqWJHpX3HhmxyoEmY",
  "key28": "2WdKWDWbfnBBzdyHZZvyYP2VwD8z1SPqbiZPCZhCj9TSRjkoqHCJaDR99AbVnwzMbE5XurHfCzVBhJHA4GfLhGT4",
  "key29": "4dNKQLGgCSbHymrNtsgVhedcDGnPtYeMtTE83rFGT6EbtBJq8cnYywTWhqKCZPXSc9j9o4HJRWMn3HY7bBvKNWtD",
  "key30": "2NANhrAfpsbmZuPgmDPmT8kTRu78tzuKJqnpTiedLEHv1oPF7bZpAXexcSBngGb6GgEzgGnPi12BC5LZHjvi1NBG",
  "key31": "4E84uSq21sGNp8s7L8eeDbieZUjQuXam2PtuxeVxwcJKon3x8WPQ2SSkGfFT8MRKBva3wqe1WXXpGvd2FHCzpyW2",
  "key32": "5ynUVXt5KYXE9KNRfDD46ACRDDRQq2u22Vm5c3tTuukKrnXffxqjA7y3hx8yr145ED3ffNBN7cbZnz8XYPW4iJqN",
  "key33": "3jgeZpA2ngH3j3SfZHWxeXRQLh2kQwhojzVGiMykfa4KtTkkBBVUjwQfCJ9yEEp7BwsGJaj39ykRd2UoRAaVaJNq",
  "key34": "4Bctb5KGRYgx3zHarNWjepAf9UuL9sFGPMSHHYbMv42bELEYQLrTty7cdzmhY9j4wWo9GLCeBSYt6HKiAB8NL5Bh"
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
