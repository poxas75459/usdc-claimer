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
    "AsQs7hL6YNxSWSXXodY3UPwv9C1mhcPNMbsU4btTrEoo2MxhQYv3QBWqZ26etSFF913BGdLfDNTTcHsJBwnpCUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nq8npioSBorQ8qiaYHyPuBteEFLSjyVnYzDyCBgohcdaRUrH3KmL1rWjtn4aZBJYsVFi9hjUVpUbsHN8nDYJLHQ",
  "key1": "6184GjigjBJpJpDeCJnpaQXzaYUmVHKN3zAdenQtqD923RxrWVXiYkeiVa7RAd7geibUYHduwTxwvtU2aqakbkoY",
  "key2": "5j2MwHo2Rycd6HepFtnn45kspJqRwFa1Gvpg9MWtb6LGm4cSFxYbw9fz3VeZHPycnSk3nCxFFsM79NDUXSeyEQvF",
  "key3": "2PCRQdekw24Zf7QwfoT8VJhEJANyEc61dHuMToZFwo6LtToKKFFqaVApZqUZnbFgFVpGdY3fQGnksNp8UD15kLGA",
  "key4": "4UctdP3mp4jH2N2EVnm2DZhB2CBs3wt8DkUDhjRmK29zmSJ8743u2yAZeJN8tFvDSyJP6x8FdwXWCJ9prUYGUMv6",
  "key5": "3hnV9rQMwqXtYETTYvXukmoDdWwahyzV7EK4ZCq8s67vPNaNC1awwf9137a1JzhnZgTmxHwz6DPvw8FkVoQ2cR6z",
  "key6": "vRd7aSxG4MkPnvXfgmrqrLBQRfz2pBCTcaCptm3e33kja3W1JpTgnEbhpfF8bQcfUnrhgFcLZd6nPDBdW7sJksY",
  "key7": "4yGstCV7GhbsVvjoZyTUzkAPqgVkWwgEWVA95Ms8E5h3Va6TKAYSJFepWDf5ZnCwcV8TKvui11X1DsVoJdoMhQmn",
  "key8": "5AHQLjFRctVD4Ly5ryXz18gggE7NfCNxhJjRff5jM8mkNudHTfurqoEv4JM9UUpiTXevwm7D5DNHnMB3qFpdh3Mn",
  "key9": "38hDx7wVYYxAyRVeg3n1KwMUVdqFGbL8iLai2X4eTDaYYWVGysjUi6HV12wkSX91gp7sFpTE5cPPK7XRaG8LPAdt",
  "key10": "2P8nJHhmfgk56K52zAWkqDYcEcJGxziM7Cpi1Rk39d5CgiZsP837LcYpiRXLEsWXBd94V1UrzW8SWrGCvBu3S7Q9",
  "key11": "YtGMyMrgNor2iQaSD2JLVzBAsnHrBhyCEWRPZk8N17XqQKBkKV7bAkbp9FdUHx8zShWaVmbJfV4RMyHK5bsa8x8",
  "key12": "4GLxYp3PjpjGcxZ8dKGFxWQef3TWfVSLrhqUcmLgNTDkEdoTMJAbguiFPuivJaas7GMrjKaGk9p66JDDe7unQouk",
  "key13": "5oL2EXJos19DiGEdRjVF2gSZwroU8P6tTw21s6TcZG6wCM96tyh2xy1XowNi1f5VQqzUuZnbcHJSg9pMoKqgijd1",
  "key14": "3upMtDPUXH9SfdxVfZLHL1sESJVKEpnqacs916KbnDNKmNccpWKmyD3WAmk8MBVfT6MHsCfE4JpyJ4XcDLxENC6i",
  "key15": "42Wf6YQ3H2jwFfQoL6Aq9NmG2NTzrY2HodzmsWFM28rcZ9h22kNmn88BjYpjKHy9tCePxzzsZXaZGoTxuJgwAAQZ",
  "key16": "5H21J44un84LH3yLF36SD9zxyD24xLdGh7Hxm3DK9oSk6udhDjmdWpS3T7e7TdUzJ1fE59GByKac9uhphHMrmiQ5",
  "key17": "5F68TwYgZHNRMskeJex5F736KKuLt5pRZd7nbAaCLLJoB1w4P75X6Be3TRFHXs8nTD4dt5tqUxTkdrr4c2hkL5wd",
  "key18": "5XYME7J9mBsCDcTcbVTjdNHudeUk9398amURvsSUAMBVuGMJcY8d5KyLiConR2i4o6koq2K73dgsKdCBYTKE2LVB",
  "key19": "3gk7fNTNvUGQLiFnLxqwqVSMSXYYvax9yUz9zK5xzqC2Qk7MHjwJ8SbQXrx4DQu1bCLPJmhexwyh5nchhdkkdV5X",
  "key20": "5hoL8p26do3oPwhMGn1rdnmfg8T8Mjwaw5oVhuAGxCfDve4fTEvuBSt6icX9Y4sfZCavELmbw85Q2hx6umA6awJC",
  "key21": "2aAcvCdwaAAjRVKeEwNmbjoNH7BJGhsNy5FHHBN6XUSEiwSshgbZ3kiiEVoJXXmrX37Pfdo79uCB2goU4RSs7iYa",
  "key22": "3X5GSoFooniaTQq9hS4fPt4ijBXs2PNcUuwM7uveVFhGkucGYarC425ZWL2TVaUasnLeBg8eXmbxNm4QuEd6f9yT",
  "key23": "32Co2kKHdsuoqvRVqN41gSTufmYxtwF3hj58vAQ9mHaz3VwR49fHwHib5NxLcYWYSdQAfSKNhZ1dHMqqxU616A97",
  "key24": "4p8n3EXTDLkmY9nG6DY9L3GX51mTg67cQ3cHiuSpocg5y4oVsbrcsLAbxwaHDAdaMD1y6bau9A3Wyx7bRqjkicu9",
  "key25": "2w3qy94eNSV1HubzwJebm84HHT7XZ5jedYVfBoyJh6dRJ47tRwcJJmDosf9qZYt2CXrKUmHhKcu6jKQGCFMDxmZx",
  "key26": "V6ABAcQxt5um9ttN17Z85K4UtLsc2p7MKBmEJ9MAdcTYyvi25nteJbmS26xeU8GGADUB7naeRU7VSNv3d3Xxn6R",
  "key27": "49JaAEPSUxkncKu94ZTc6oVsTTDQTgDnUMZXqvh2HUnPUtPov9XBc5L343YGvZCEZWMNcGjpXsKikv7LAZhBmLr",
  "key28": "3EpJgd5ypu5s43BHymx7A1oEvSiFPwmHBTspb7WRL2WZ1LGdov3WKpzXYiJTszp9NvtDfvJ3TPov7TrPC7T3Lhn",
  "key29": "3RhxMigk5uGowEqBDDDgd1CEUHBkpbJvkQTMvT8FiuqycrjFTs4KsaMf7GBaTLzUTxBHQiXFmsy9fKhuAC4ooAv2",
  "key30": "4igd6aKubXwS2wyvSy3KYBuPoNwPw1tuQWLrs5WsEkKXmnUrDSf5Z3LtiCEPWEvHEgGti9GLkN1Mn7SGEx7h94ij",
  "key31": "3Md14N47GqHtk6UPQnDvMNDw9vzxGVEHzrwQidaNAoQRKP845ek2t2FTQhpWEG8WfXFBJhxCcWHjs9vzPEcLVpF3",
  "key32": "HhFSEEUnxsuapLcdLveNuWiTS1g6VxQTNX16LhZQj4xLWDRF89znt68mS9i9MDbUJfNUMyFHEw1k3vgURQZ8JFm",
  "key33": "41kz8WmnAiYpEaSAj8M1PkmtazNsYo9qhE3pGo6Pvg4BEPbegLKXCN6iXJcTmZkDjEthRXKFKeWibCA66w4eXU1C",
  "key34": "4obXx8DLCYdH4XyKbuBxKS4A26Aghi8TWtQy6mhkEHTUSuEHmd66UAnW3LpC9zrs4gxt1DzeRXbFX3rco7S9AyqZ",
  "key35": "um9C8QKHkxzV9g2nWfR91wE2WYYN4usdTsK6JwoC9G92HN67ycqjUvNKmnEL48kCFftXzPMDy7DZcy2JvH5ndTi",
  "key36": "3i3UGF2zqHK6F9NwvSpYi6Qgm1aUbkifC1wQDWzLhDsoMDXq7NU84v3q1aGESKsBtFzvBYaG7ZXCRUsnrn4St9Ss",
  "key37": "LKJstJr9i72UTjY55u7Fj4FhiGHpYipwRTV5zYb67i2woRwuuZqJLVBsJyZE5EBg9yxvuVGcpzVnPzXG3JRjBvq",
  "key38": "5GxF8F9cGfXPJAhGoYWwC1oejMudHbFvdY4XfyemERW1B5zM12rJx4Hkyv5yQ4Xtdv4EsKsMV1cX95ZSBNedtBPt",
  "key39": "2yV82iYc3xKjiMC9dfMjGE2X4Hscj97DUFN7agnMmBiZ7GQCYFJmMFW2UEyrbbviuAGHd9G3xL6BTnQU1gwpttQG",
  "key40": "2BoHpoqaTXidp61DDCmhTVjvgv2aDhiCmhsJoE2BxGpGcB2M854cCVVzzH86rj1XPYuuhUPrGFHv1SrSYtsUzuv9",
  "key41": "2guAyUBMYWYGjnRmuXFNjeEmJDG4uRTJ7pybMqYNvesWz1zW5W7HKSwnKztMYmG6EwiGKnRtLBJR6hX8xpzPuNVw",
  "key42": "32pCEoiaVbzNuKfhAKShM3jxM4AeszAG9Z5PLUM4VyFuLLiDei1PP6i2fceTPN7EML6yzgSmeMjByGfmtUJrQQKZ"
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
